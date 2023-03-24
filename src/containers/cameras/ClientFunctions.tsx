'use client';

import { useMount } from 'react-use';

const ClientFunctions = () => {
  useMount(() => {
    const currentHash = window.location.hash.replace('#', '');
    document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
  });

  return null;
};

export default ClientFunctions;
