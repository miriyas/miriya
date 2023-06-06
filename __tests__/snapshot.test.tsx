// NOTE: export metadata 있을 경우 서버 컴포넌트 테스트 불가능
// layout에다 빼두면 되지만.. 다음 수정을 기다려본다..
// https://github.com/vercel/next.js/issues/47299

import { render } from '@testing-library/react';

import Home from '@/app/page';
// import BlogHome from '@/app/blog/page';
// import BlogArticle from '@/app/blog/[postId]/page';
// import BlogArticleEdit from '@/app/blog/[postId]/edit/page';

/** async인 서버 컴포넌트 테스트 할 때 사용함 */
// async function resolvedComponent(Component: Function, props?: any) {
//   const ComponentResolved = await Component(props);
//   return () => ComponentResolved;
// }

describe('Snapshot', () => {
  it('Home', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  // it('BlogHome', async () => {
  //   // mockRouter.setCurrentUrl('/blog');
  //   const BlogHomeResolved = await resolvedComponent(BlogHome);
  //   const { container } = render(<BlogHomeResolved />);
  //   expect(await container).toMatchSnapshot();
  // });

  // it('BlogArticle', async () => {
  //   const BlogArticleResolved = await resolvedComponent(BlogArticle, {
  //     params: { postId: 'NtV5JgzYpdxs4DQtr0eh' },
  //   });
  //   const { container } = render(<BlogArticleResolved />);
  //   expect(container).toMatchSnapshot();
  // });

  // it('BlogArticleEdit', () => {
  //   const { container } = render(<BlogArticleEdit />);
  //   expect(container).toMatchSnapshot();
  // });

  // it('BlogHome', () => {
  //   const { container } = render(<BlogHome />);
  //   expect(container).toMatchSnapshot();
  // });

  // it('BlogHome', () => {
  //   const { container } = render(<BlogHome />);
  //   expect(container).toMatchSnapshot();
  // });

  // it('BlogHome', () => {
  //   const { container } = render(<BlogHome />);
  //   expect(container).toMatchSnapshot();
  // });

  // it('BlogHome', () => {
  //   const { container } = render(<BlogHome />);
  //   expect(container).toMatchSnapshot();
  // });
});
