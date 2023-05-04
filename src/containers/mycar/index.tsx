import Image from 'next/image';

import { car1 } from './constants';

import styles from './index.module.scss';

const ProfilePage = () => {
  return (
    <main className={styles.mycar}>
      <div className={styles.centering}>
        <div className={styles.header}>
          <div className={styles.texts}>
            <p className={styles.title}>{car1.name}</p>
            <p className={styles.line}>
              {car1.maker} {car1.lineup}
            </p>
            <p className={styles.vin}>{car1.vin}</p>
            <p className={styles.owner}>{car1.owner}</p>
          </div>
          <Image src='/images/mycar/car1.jpg' width={800} height={450} alt='' />
        </div>
        <div className={styles.contents}>
          <table>
            <tbody>
              {car1.listFix.map((item) => {
                return (
                  <tr key={item.time}>
                    <th>
                      <time>{item.time}</time>
                      <p>{item.km.toLocaleString()}km</p>
                    </th>
                    <td>{item.location}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
