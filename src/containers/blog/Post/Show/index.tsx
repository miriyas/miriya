/* eslint-disable react/no-danger */

import dynamic from 'next/dynamic';

import { FBBlogCategory, FBBlogPost } from '@/types/blog.d';
import CategoriesBar from '@/containers/blog/_common/SideBar';
import { imageOptimize } from '../utils';

import Loading from '@/components/Loading';
import Header from './Header';
import styles from './index.module.scss';

const Comments = dynamic(() => import('./Comments'), {
  ssr: false,
  loading: () => <Loading />,
});

interface Props {
  categories: FBBlogCategory[];
  postData: FBBlogPost;
}

const BlogShowPage = ({ categories, postData }: Props) => {
  const { id, title, category, body, hero } = postData;

  return (
    <main className={styles.showPost}>
      <div className={styles.centering}>
        {hero && (
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url(${hero})`,
            }}
          >
            <div className={styles.cover}>
              <div className={styles.titleShade}>
                <p>{postData.title}</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles.wingWrapper}>
          <article>
            <Header postData={postData} categories={categories} />
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: imageOptimize(body) }} />
            <Comments targetId={id} targetName={title} />
          </article>
          <CategoriesBar categories={categories} currentCategory={category} />
        </div>
      </div>
    </main>
  );
};

export default BlogShowPage;
