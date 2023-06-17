'use client';

import Image from 'next/image';
import { groupBy } from 'lodash';
import dayjs from 'dayjs';

import useM2day from './useM2day';
// import { M2PostType } from '@/types/m2day.d';

import FormNew from './FormNew';
import Profile from './Profile';
import SideBar from './SideBar';
import DateItem from './DateItem';
import styles from './index.module.scss';
import Loading from '@/components/Loading';

if (typeof window !== 'undefined') {
  window.onClickYoutube = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('openYoutubePannel', {
        detail: {
          postid: e.currentTarget.dataset.postid,
          link: e.currentTarget.href,
        },
      }),
    );
  };
}

// const posts2: M2PostType[] = [
//   {
//     id: 'fdsafdsfs',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-06T03:04'),
//     likes: 2,
//     comments: [
//       {
//         id: 'fdasfds',
//         body: '댓글ㅈㅁㄹㅁㅇㄴㄹㅇㄴㄹ',
//         author: {
//           nickname: '김봉남',
//           nicknameIsFake: false,
//         },
//       },
//       {
//         id: 'fdasferwerds',
//         body: 'dfsfadfdasfsddsafasdf',
//         author: {
//           nickname: '김봉남',
//           nicknameIsFake: false,
//         },
//       },
//     ],
//   },
//   {
//     id: 'fds432afdsfs',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-06T01:39'),
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: 'fdsafdsgfgffs',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-06T00:14'),
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: 'fdsafds432fs',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-05T03:04'),
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: 'fdsafd432sfs',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-05T02:04'),
//     likes: 2,
//     comments: [],
//   },
//   {
//     id: 'fdsafdsf45s',
//     content: '키보드용 비니루 껍데기 주제에 가격이 34,000원? 그냥 키보드 쓰다 버리면 되겠네. 키보드 반값이야..',
//     createdAt: new Date('2011-06-05T01:04'),
//     likes: 2,
//     comments: [],
//   },
// ];

const M2dayPage = () => {
  const { posts, isLoading } = useM2day();

  const days = groupBy(posts, (year) => dayjs(year.createdAt).format('YYYY-MM-DD'));

  return (
    <div className={styles.m2dayPageContent}>
      <div className={styles.centering}>
        <div className={styles.leftWing}>
          <Profile />
          <SideBar />
        </div>
        <div className={styles.rightWing}>
          <div className={styles.top}>
            <Image className={styles.logo} src='/images/m2day/logo.png' width={200} height={48} alt='' />
          </div>
          <FormNew />
          <div className={styles.contentsWrapper}>
            <div className={styles.header}>
              <p className={styles.me}>나는</p>
              <p className={styles.divider}>&gt;</p>
              <p className={styles.all}>모든글</p>
            </div>
            {isLoading && (
              <div className={styles.loadingWrapper}>
                <Loading />
              </div>
            )}
            <ul className={styles.days}>
              {Object.keys(days).map((day) => {
                return <DateItem key={day} day={day} posts={days[day]} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M2dayPage;
