import TabHome from '@/containers/minihome/TabHome';

const MinihomeHomePage = async () => {
  // 사용자당 1시간에 60번 제한이 있다. 풀 수 있지만 따로 인증은 귀찮아서...
  // 어차피 한시간에 60번 새로고침 할 경우 그 사용자에게만 안보이게 됨.
  const commitsData = await fetch('https://api.github.com/repos/miriyas/miriya/commits', {
    next: { revalidate: 60 * 10 }, // 10분 캐시
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .catch(() => {
      return [];
    });

  return <TabHome commitsData={commitsData} />;
};

export default MinihomeHomePage;
