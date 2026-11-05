import { GuestbookData } from '@/types/minihome';

import NewForm from './NewForm';
import Comments from './Comments';

const TabGuestBook = ({ firstPage, fetchedAt }: { firstPage?: GuestbookData; fetchedAt?: number }) => {
  return (
    <div>
      <NewForm />
      <Comments firstPage={firstPage} fetchedAt={fetchedAt} />
    </div>
  );
};

export default TabGuestBook;
