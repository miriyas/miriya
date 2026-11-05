import TabGuestBook from '@/containers/minihome/TabGuestBook';
import { getGuestbookDataAPI } from '@/services/minihome';

// The first page of public entries goes into the HTML (the server gets it from the backend inside
// the server). Before, the browser loaded it after the page, one round trip after another.
// The browser still refreshes the list at once, so admins also see hidden entries.
const GuestbookPage = async () => {
  const fetchedAt = Date.now();
  const firstPage = await getGuestbookDataAPI()
    .then((res) => res.data)
    .catch(() => undefined);
  return <TabGuestBook firstPage={firstPage} fetchedAt={fetchedAt} />;
};

export default GuestbookPage;
