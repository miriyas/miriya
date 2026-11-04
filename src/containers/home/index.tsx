import { articles } from '@/containers/home/articles';

import HomeArticle from './Article';
import styles from './index.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.centering}>
        <ul className={styles.pages}>
          {articles.map((article, index) => (
            <HomeArticle key={article.id} {...article} priority={index === 0} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
