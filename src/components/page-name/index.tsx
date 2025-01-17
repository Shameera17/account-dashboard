'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';

const PageName = () => {
  const [pageName, setPageName] = useState<string>('');
  const pathname = usePathname();

  const retrievePageName = () => {
    let match = pathname?.match(/\/dashboard\/([^/]+)/);
    if (match && match[1].includes('-')) {
      match[1] = match[1].replace(/-/g, ' ');
    }
    return match ? match[1].charAt(0).toUpperCase() + match[1].slice(1) : 'Dashboard';
  };

  useEffect(() => {
    if (pathname) {
      setPageName(retrievePageName());
    }
  }, [pathname]);

  return <Typography variant="h4">{pageName} </Typography>;
};

export default PageName;
