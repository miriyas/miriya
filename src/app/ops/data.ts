import 'server-only';

import { readFile } from 'node:fs/promises';

import { OpsSource, OpsStatus } from '@/types/ops';

// Runs on the server only, so OPS_TOKEN never goes to the browser.

const CHARR_URL = 'https://charr.today/api/ops/status';
// Written every minute by miriya-server/deploy/ops-status.py, mounted read-only (compose.yml).
const MIRIYA_FILE = process.env.OPS_STATUS_FILE ?? '/app/ops-status/miriya.json';

const isStatus = (data: unknown): data is OpsStatus =>
  !!data && typeof data === 'object' && (data as OpsStatus).version === 1 && Array.isArray((data as OpsStatus).metrics);

const getCharr = async (): Promise<OpsSource> => {
  const name = '차르르';
  const token = process.env.OPS_TOKEN;
  if (!token) return { name, error: 'OPS_TOKEN이 서버에 설정되지 않았습니다.' };
  try {
    const res = await fetch(CHARR_URL, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { name, error: `charr.today 응답 ${res.status}` };
    const data: unknown = await res.json();
    return isStatus(data) ? { name, data } : { name, error: '응답 모양이 version 1이 아닙니다.' };
  } catch (error) {
    return { name, error: `charr.today에 연결하지 못했습니다 (${(error as Error).name}).` };
  }
};

const getMiriya = async (): Promise<OpsSource> => {
  const name = 'miriya 서버';
  try {
    // turbopackIgnore: the file is outside the project (a mount), so do not trace the project for it.
    const data: unknown = JSON.parse(await readFile(/* turbopackIgnore: true */ MIRIYA_FILE, 'utf8'));
    return isStatus(data) ? { name, data } : { name, error: '상태 파일의 모양이 version 1이 아닙니다.' };
  } catch {
    return { name, error: '상태 파일이 없습니다 (서버의 ops-status.py cron을 확인하십시오).' };
  }
};

const getMeetups = async (): Promise<OpsSource> => {
  const name = '카카오 모임 수집';
  try {
    const res = await fetch('https://bung-analytics.vercel.app/ops-status.json', {
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { name, error: `수집 상태를 가져오지 못했습니다 (${res.status}).` };
    const data: unknown = await res.json();
    if (!isStatus(data) || data.project !== 'kakao-meetups' || !Array.isArray(data.jobs) || !Array.isArray(data.runs)) {
      return { name, error: '수집 상태 형식을 확인할 수 없습니다.' };
    }
    return { name, data };
  } catch {
    return { name, error: '수집 상태에 연결하지 못했습니다.' };
  }
};

export const getOpsSources = () => Promise.all([getMiriya(), getCharr(), getMeetups()]);
