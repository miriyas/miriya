/* eslint-disable react/no-danger */

import { getPrivacyMarkdownApi } from '@/services/privacy';

import styles from './Privacy.module.scss';

const PrivacyPage = async () => {
  const data = await getPrivacyMarkdownApi()
    .then((res) => res.data)
    .catch(() => '');

  return (
    <main className={styles.privacy}>
      <div className={styles.centering}>
        <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </main>
  );
};

export default PrivacyPage;
