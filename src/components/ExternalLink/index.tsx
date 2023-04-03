import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

/** rel: nofollow 적용한 외부 링크 */
const ExternalLink = ({ href, children, className }: Props) => {
  return (
    <a href={href} target='_blank' rel='nofollow' className={className}>
      {children}
    </a>
  );
};

export default ExternalLink;
