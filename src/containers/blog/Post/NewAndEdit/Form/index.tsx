'use client';

import { notFound, useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import { useMount, useUnmount } from 'react-use';
import { RESET } from 'jotai/utils';

import useAuth from '@/hooks/useAuth';
import { BlogCategory, BlogPost } from '@/types/blog.d';
import { bodyAtom, categoryAtom, heroAtom, hiddenAtom, titleAtom, loadingAtom } from './states';
import { revalidateApi } from '@/services';

import Top from './Top';
import Editor from './Editor';
import styles from './index.module.scss';

interface Props {
  categories: BlogCategory[];
  postData?: BlogPost; // 없으면 새글
  onSubmit: (body: Partial<BlogPost>, postId?: string) => Promise<AxiosResponse>;
}

const BlogEditor = ({ categories, postData, onSubmit }: Props) => {
  const router = useRouter();
  const { isAdmin, isLoadingMe, user } = useAuth();

  const [title, setTitle] = useAtom(titleAtom);
  const [body, setBody] = useAtom(bodyAtom);
  const [categoryId, setCategoryId] = useAtom(categoryAtom);
  const [hero, setHero] = useAtom(heroAtom);
  const [hidden, setHidden] = useAtom(hiddenAtom);
  const setIsLoading = useSetAtom(loadingAtom);

  if (!isAdmin && !isLoadingMe) notFound();

  useMount(() => {
    if (postData?.title) setTitle(postData.title);
    if (postData?.body) setBody(postData.body);
    if (postData?.hero) setHero(postData.hero);
    if (postData?.hidden) setHidden(postData.hidden);
    setCategoryId(postData?.categoryId ?? categories[0].id);
  });

  useUnmount(() => {
    setTitle(RESET);
    setBody(RESET);
    setCategoryId(RESET);
    setHero(RESET);
    setHidden(RESET);
    setIsLoading(RESET);
  });

  const submitDisabled = !user || !body || !title || !categoryId;

  const onClickSubmit = () => {
    if (submitDisabled) return;
    setIsLoading(true);

    const preview = document.querySelector('#previewData')?.textContent ?? '';
    onSubmit(
      {
        title,
        body,
        preview: preview.substring(0, 300),
        categoryId,
        hidden,
        hero,
      },
      postData?.id,
    )
      .then((res) => {
        revalidateApi(`/blog/${res.data.postId}`).then(() => {
          router.replace(`/blog/${res.data.postId}`);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.form}>
      <Top categories={categories} onSubmit={onClickSubmit} />
      <Editor />
    </div>
  );
};

export default BlogEditor;
