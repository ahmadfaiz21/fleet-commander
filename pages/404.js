// pages/404.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push('/singin');
  }, []);

  return null;
};

export default NotFoundPage;
