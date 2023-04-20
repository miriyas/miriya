import { AnchorHTMLAttributes, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** rel: nofollow 적용한 외부 링크 */
const ExternalLink = ({ href, children, ...restProps }: Props) => {
  return (
    <a href={href} target='_blank' rel='nofollow' {...restProps}>
      {children}
    </a>
  );
};

export default ExternalLink;
