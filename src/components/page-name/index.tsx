'use client'; // Ensures this is a client-side component

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';

const PageName = () => {
  const [pageName, setPageName] = useState<string>('');
  const pathname = usePathname(); // Replaces router.pathname

  const retrievePageName = () => {
    const match = pathname?.match(/\/dashboard\/([^/]+)/); // Extracts "wallet"
    return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) : 'Dashboard';
  };

  useEffect(() => {
    if (pathname) {
      setPageName(retrievePageName());
    }
  }, [pathname]); // Dependency array includes pathname

  return <Typography variant="h4">{pageName} </Typography>;
};

export default PageName;
