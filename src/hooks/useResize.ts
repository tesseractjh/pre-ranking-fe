import { useEffect } from 'react';

function useResize(callback: Parameters<typeof window.addEventListener>[1]) {
  useEffect(() => {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);
}

export default useResize;
