'use client';

import { ItemParts } from '@/types/mycar.d';

import styles from './index.module.scss';

interface Props {
  list: ItemParts[];
}

const ListParts = ({ list }: Props) => {
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
            <tr key={`${item.name}-${item.partsNo}`}>
              <th>{item.name}</th>
              <td>{item.partsNo}</td>
              <td>{item.price?.toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListParts;
