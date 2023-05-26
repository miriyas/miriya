import TabGuestBook from '@/containers/minihome/TabGuestBook';
import { getGuestbookDataAPI } from '@/services/minihome';

const TabGuestBookPage = async () => {
  const comments = await getGuestbookDataAPI().then((res) => res.data);

  return <TabGuestBook comments={comments} />;
};

export default TabGuestBookPage;
