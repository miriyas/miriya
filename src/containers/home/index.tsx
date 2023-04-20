import { articles } from '@/containers/home/articles';

import HomeArticle from './Article';
import styles from './index.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.centering}>
        <ul className={styles.pages}>
          {articles.map((article) => (
            <HomeArticle key={article.id} {...article} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
