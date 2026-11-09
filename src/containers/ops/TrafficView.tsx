import { Traffic, TrafficRow } from '@/types/ops';

import styles from './TrafficView.module.scss';

const SOURCE_LABEL: Record<string, string> = { '(direct)': '직접 방문', '(not set)': '알 수 없음' };

const TopList = ({ title, rows, unit, label }: { title: string; rows: TrafficRow[]; unit: string; label?: (s: string) => string }) => {
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <div className={styles.list}>
      <h4>{title}</h4>
      {rows.length === 0 ? (
        <p className={styles.empty}>아직 데이터가 없습니다.</p>
      ) : (
        <ol>
          {rows.map((r) => (
            <li key={r.label}>
              <span className={styles.label} title={r.label}>
                {label ? label(r.label) : r.label}
              </span>
              <span className={styles.value}>
                {r.value.toLocaleString('ko-KR')}
                {unit}
              </span>
              <i style={{ width: `${(r.value / max) * 100}%` }} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const minSec = (sec: number) => (sec < 60 ? `${sec}초` : `${Math.floor(sec / 60)}분 ${sec % 60}초`);

/** GA4 numbers under the daily visitor chart: realtime, 7-day totals, top pages, sources. */
const TrafficView = ({ traffic }: { traffic: Traffic }) => {
  if (traffic.error !== undefined) return <p className={styles.empty}>{traffic.error}</p>;
  return (
    <div className={styles.traffic}>
      <dl className={styles.numbers}>
        <div className={styles.realtime}>
          <dt>지금 (최근 30분)</dt>
          <dd>{traffic.realtime === null ? '-' : `${traffic.realtime.toLocaleString('ko-KR')}명`}</dd>
        </div>
        <div>
          <dt>페이지뷰 (7일)</dt>
          <dd>{traffic.pageViews.toLocaleString('ko-KR')}</dd>
        </div>
        <div>
          <dt>새 방문자 (7일)</dt>
          <dd>{traffic.newUsers.toLocaleString('ko-KR')}명</dd>
        </div>
        <div>
          <dt>평균 참여 시간</dt>
          <dd>{minSec(traffic.avgEngagementSec)}</dd>
        </div>
      </dl>
      <div className={styles.lists}>
        <TopList title='인기 페이지 (7일, 페이지뷰)' rows={traffic.topPages} unit='' />
        <TopList title='유입 경로 (7일, 세션)' rows={traffic.sources} unit='' label={(s) => SOURCE_LABEL[s] ?? s} />
      </div>
    </div>
  );
};

export default TrafficView;
