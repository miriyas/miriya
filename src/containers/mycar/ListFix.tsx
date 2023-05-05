'use client';

import { ItemFix } from '@/types/mycar.d';

import styles from './index.module.scss';

interface Props {
  list: ItemFix[];
}

const ListFix = ({ list }: Props) => {
  return (
    <table>
      <tbody>
        {(!list || list.length === 0) && (
          <tr>
            <td colSpan={2} className={styles.blank}>
              내역을 추가해주세요.
            </td>
          </tr>
        )}
        {list?.map((item) => {
          return (
            <tr key={`${item.time}-${item.title}`}>
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
  );
};

export default ListFix;
