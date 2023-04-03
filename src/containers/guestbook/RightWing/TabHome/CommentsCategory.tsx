import Image from 'next/image';

import styles from './CommentsCategory.module.scss';

const CommentsCategory = () => {
  return (
    <table className={styles.commentsCategory}>
      <tbody>
        <tr>
          <td>
            <button type='button'>
              <p className={styles.category}>방명록</p>
              <p className={styles.count}>
                11/24
                <Image src='/images/guestbook/new.png' width={9} height={9} alt='' className={styles.new} />
              </p>
            </button>
          </td>
          <td>
            <p className={styles.category}>Idols</p>
            <p className={styles.count}>11</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className={styles.category}>DSLR</p>
            <p className={styles.count}>11</p>
          </td>
          <td>
            <p className={styles.category}>Pentax</p>
            <p className={styles.count}>11</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className={styles.category} />
            <p className={styles.count} />
          </td>
          <td>
            <p className={styles.category} />
            <p className={styles.count} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CommentsCategory;
