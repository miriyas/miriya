import { VisitorSite } from '@/types/ops';

import styles from './VisitorChart.module.scss';

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

/** Today, yesterday and the last 8 days of visitors (GA4 activeUsers) as small bars. */
const VisitorChart = ({ site }: { site: VisitorSite }) => {
  if (!site.days) {
    return (
      <div className={styles.visitors}>
        <h3>일 방문자</h3>
        <p className={styles.error}>{site.error}</p>
      </div>
    );
  }
  const { days } = site;
  const today = days[days.length - 1]?.users ?? 0;
  const yesterday = days[days.length - 2]?.users ?? 0;
  const week = days.slice(-7).reduce((a, d) => a + d.users, 0);
  const max = Math.max(...days.map((d) => d.users), 1);

  return (
    <div className={styles.visitors}>
      <div className={styles.head}>
        <h3>일 방문자</h3>
        <p>Google Analytics 활성 사용자 · 10분마다 갱신</p>
      </div>
      <div className={styles.body}>
        <dl className={styles.numbers}>
          <div>
            <dt>오늘</dt>
            <dd>{today.toLocaleString('ko-KR')}</dd>
          </div>
          <div>
            <dt>어제</dt>
            <dd>{yesterday.toLocaleString('ko-KR')}</dd>
          </div>
          <div>
            <dt>최근 7일 합계</dt>
            <dd>{week.toLocaleString('ko-KR')}</dd>
          </div>
        </dl>
        <div className={styles.chart}>
          {days.map((d, i) => (
            <div key={d.date} className={styles.bar} title={`${d.date}  ${d.users.toLocaleString('ko-KR')}명`}>
              <span className={styles.value}>{d.users.toLocaleString('ko-KR')}</span>
              <i style={{ height: `${(d.users / max) * 100}%` }} className={i === days.length - 1 ? styles.today : ''} />
              <span className={styles.day}>
                {Number(d.date.slice(8))}({WEEKDAY[new Date(`${d.date}T00:00:00Z`).getUTCDay()]})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitorChart;
