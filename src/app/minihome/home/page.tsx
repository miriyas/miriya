import { Octokit } from 'octokit';

import TabHome from '@/containers/minihome/TabHome';

const MinihomeHomePage = async () => {
  // Octokit을 쓰지 않고 바로 API 때리면 사용자당 1시간에 60번 제한이 있다.
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const { data: commitsData } = await octokit.request('GET https://api.github.com/repos/miriyas/miriya/commits');

  return <TabHome commitsData={commitsData} />;
};

export default MinihomeHomePage;
