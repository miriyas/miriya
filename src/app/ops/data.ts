import 'server-only';

import { readFile } from 'node:fs/promises';
import { cache } from 'react';
import { cookies } from 'next/headers';

import { OpsSource, OpsStatus, Traffic, VisitorSite } from '@/types/ops';
import { cookiesToString } from '@/utils/cookie';
import { BE_URL } from '@/services';

// Runs on the server only, so OPS_TOKEN never goes to the browser.

const CHARR_URL = 'https://charr.today/api/ops/status';
// Written every minute by miriya-server/deploy/ops-status.py, mounted read-only (compose.yml).
const MIRIYA_FILE = process.env.OPS_STATUS_FILE ?? '/app/ops-status/miriya.json';

type Loaded = { data: OpsStatus; error?: undefined } | { data?: undefined; error: string };

const isStatus = (data: unknown): data is OpsStatus =>
  !!data && typeof data === 'object' && (data as OpsStatus).version === 1 && Array.isArray((data as OpsStatus).metrics);

const loadCharr = async (): Promise<Loaded> => {
  const token = process.env.OPS_TOKEN;
  if (!token) return { error: 'OPS_TOKEN이 서버에 설정되지 않았습니다.' };
  try {
    const res = await fetch(CHARR_URL, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { error: `charr.today 응답 ${res.status}` };
    const data: unknown = await res.json();
    return isStatus(data) ? { data } : { error: '응답 모양이 version 1이 아닙니다.' };
  } catch (error) {
    return { error: `charr.today에 연결하지 못했습니다 (${(error as Error).name}).` };
  }
};

const loadMiriya = async (): Promise<Loaded> => {
  try {
    // turbopackIgnore: the file is outside the project (a mount), so do not trace the project for it.
    const data: unknown = JSON.parse(await readFile(/* turbopackIgnore: true */ MIRIYA_FILE, 'utf8'));
    return isStatus(data) ? { data } : { error: '상태 파일의 모양이 version 1이 아닙니다.' };
  } catch {
    return { error: '상태 파일이 없습니다 (서버의 ops-status.py cron을 확인하십시오).' };
  }
};

const loadMeetups = async (): Promise<Loaded> => {
  try {
    const res = await fetch('https://bung-analytics.vercel.app/ops-status.json', {
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return { error: `수집 상태를 가져오지 못했습니다 (${res.status}).` };
    const data: unknown = await res.json();
    if (!isStatus(data) || data.project !== 'kakao-meetups' || !Array.isArray(data.jobs) || !Array.isArray(data.runs)) {
      return { error: '수집 상태 형식을 확인할 수 없습니다.' };
    }
    return { data };
  } catch {
    return { error: '수집 상태에 연결하지 못했습니다.' };
  }
};

/** The projects on /ops, in page order. `key` is the URL (/ops/<key>) and the GA site key. */
export const PROJECTS = [
  { key: 'miriya', name: 'miriya 서버', load: loadMiriya, ga: true },
  { key: 'charr', name: '차르르', load: loadCharr, ga: true },
  { key: 'meetups', name: '카카오 모임 수집', load: loadMeetups, ga: false },
] as const;

export type ProjectKey = (typeof PROJECTS)[number]['key'];

export const findProject = (key: string) => PROJECTS.find((p) => p.key === key);

// Last good value per project, so a slow or failed fetch shows old numbers instead of an empty panel.
const lastGood = new Map<string, { data: OpsStatus; at: string }>();

/** One project's status. Cached per request: every section of a page shares one fetch. */
export const getSource = cache(async (key: ProjectKey): Promise<OpsSource> => {
  const project = findProject(key)!;
  const loaded = await project.load();
  if (loaded.data) {
    lastGood.set(key, { data: loaded.data, at: new Date().toISOString() });
    return { key, name: project.name, data: loaded.data };
  }
  const prev = lastGood.get(key);
  return { key, name: project.name, error: loaded.error, data: prev?.data, staleSince: prev?.at };
});

const cookieHeader = async () => cookiesToString((await cookies()).getAll());

/** Daily visitors per site (key = project key). The backend checks that the cookie is the admin's. */
export const getVisitors = cache(async (): Promise<Record<string, VisitorSite>> => {
  try {
    const res = await fetch(`${BE_URL}/api/ops/visitors`, {
      headers: { cookie: await cookieHeader() },
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return {};
    const body = (await res.json()) as { sites?: VisitorSite[] };
    return Object.fromEntries((body.sites ?? []).map((site) => [site.key, site]));
  } catch {
    return {};
  }
});

/** Realtime users, top pages, sources and 7-day totals of one site. */
export const getTraffic = cache(async (key: ProjectKey): Promise<Traffic> => {
  try {
    const res = await fetch(`${BE_URL}/api/ops/traffic?site=${key}`, {
      headers: { cookie: await cookieHeader() },
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return { error: `방문 통계 응답 ${res.status}` };
    return (await res.json()) as Traffic;
  } catch (error) {
    return { error: `방문 통계를 가져오지 못했습니다 (${(error as Error).name}).` };
  }
});
