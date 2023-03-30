import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

/** rel: nofollow 적용한 외부 링크 */
const ExternalLink = ({ href, children }: Props) => {
  return (
    <a href={href} target='_blank' rel='nofollow'>
      {children}
    </a>
  );
};

export default ExternalLink;
