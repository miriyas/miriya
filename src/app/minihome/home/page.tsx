import TabHome from '@/containers/minihome/TabHome';

const MinihomeHomePage = async () => {
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
