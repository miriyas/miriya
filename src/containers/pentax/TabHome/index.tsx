import Contents from './Contents';
import ReadMe from './ReadMe';
import styles from './TabHome.module.scss';

interface Props {
  desc: string;
  readMe: string;
}

const PentaxPage = ({ desc, readMe }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.fakeBar} />
      <div className={styles.contentsWrapper}>
        <ReadMe readMe={readMe} />
        <Contents desc={desc} />
      </div>
      <div className={styles.fakeBar} />
    </section>
  );
};

export default PentaxPage;
