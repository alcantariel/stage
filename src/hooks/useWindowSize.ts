import { useListener } from 'hooks';
import { useState } from 'react';

interface UseWindowSizeReturn {
  height: number;
  width: number;
}

export const useWindowSize = (): UseWindowSizeReturn => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResize = (): void => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  useListener(window, 'resize', handleResize);

  return size;
};
