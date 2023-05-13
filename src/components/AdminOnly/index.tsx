'use client';

import { ReactElement } from 'react';

import useAuth from '@/hooks/useAuth';

interface Props {
  children: ReactElement;
}

const AdminOnly = ({ children }: Props) => {
  const { isAdmin } = useAuth();

  return isAdmin ? children : null;
};

export default AdminOnly;
