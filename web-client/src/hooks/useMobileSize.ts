import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};
export default useWindowSize;