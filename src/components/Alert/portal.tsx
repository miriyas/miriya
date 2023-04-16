import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const el = document.getElementById('alert');
  if (!el) {
    return null;
  }
  return createPortal(children, el);
};
