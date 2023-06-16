/* eslint-disable react/no-danger */

import dynamic from 'next/dynamic';

import { BlogCategoryForList, BlogPostForShow } from '@/types/blog.d';
import { bodyProcess } from '../utils';

import CategoriesBar from '../../_common/SideBar';
import Header from './Header';
import BlogComments from './BlogComments';
import NewForm from './BlogComments/NewForm';
import styles from './index.module.scss';

const LikeButton = dynamic(() => import('./LikeButton'), { ssr: false });
const CategoryRelated = dynamic(() => import('./CategoryRelated'), { ssr: false });

interface Props {
  categories: BlogCategoryForList[];
  postData: BlogPostForShow;
}

const BlogShowPage = ({ categories, postData }: Props) => {
  const { id, category, body, hero } = postData;

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
            <Header postData={postData} />
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: bodyProcess(body) }} />
            <LikeButton targetId={id} />
            <aside className={styles.commentsWrapper}>
              <BlogComments targetId={id} withHeader />
              <NewForm targetId={id} multiline />
            </aside>
            <CategoryRelated postData={postData} />
          </article>
          <CategoriesBar categories={categories} currentCategory={category.id} />
        </div>
      </div>
    </main>
  );
};

export default BlogShowPage;
