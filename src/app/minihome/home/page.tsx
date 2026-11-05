import { Octokit } from 'octokit';

import TabHome from '@/containers/minihome/TabHome';
import { getMinihomeLeftCommentsDataAPI, getMinihomRightCounterDataAPI } from '@/services/minihome';

const MinihomeHomePage = async () => {
  // Octokit을 쓰지 않고 바로 API 때리면 사용자당 1시간에 60번 제한이 있다.
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const fetchedAt = Date.now();
  // The two lists come from the backend inside the server, in parallel with GitHub.
  // Before, the browser loaded them after the page (about 1 s each from Korea).
  const [{ data: commitsData }, leftComments, rightCounter] = await Promise.all([
    octokit.request('GET https://api.github.com/repos/miriyas/miriya/commits'),
    getMinihomeLeftCommentsDataAPI()
      .then((res) => res.data)
      .catch(() => undefined),
    getMinihomRightCounterDataAPI()
      .then((res) => res.data)
      .catch(() => undefined),
  ]);

  return <TabHome commitsData={commitsData} initial={{ leftComments, rightCounter, fetchedAt }} />;
};

export default MinihomeHomePage;
