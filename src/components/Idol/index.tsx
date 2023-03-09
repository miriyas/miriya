import { IconSound } from '@/assets/svgs';
import { IIdol } from '@/types';
import Image from 'next/image';

import styles from './Idol.module.scss';

const filterIdolName = (name: string) => {
  return name.replace(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣|.,-|\&]/g, '');
};

interface Props {
  idol: IIdol;
}

const Idol = (props: Props) => {
  const {
    idol: { name, youtube },
  } = props;

  const profileUrl = `/images/idols/${filterIdolName(name)}.jpg`;

  return (
    <li>
      <div className={styles.profileImg}>
        {name}
        {youtube && youtube.url !== '' && <IconSound />}

        <Image src={profileUrl} alt={name} width={100} height={100} />
      </div>
    </li>
  );
};

export default Idol;
