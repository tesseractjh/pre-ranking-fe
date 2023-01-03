import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function useMenuModal(handleClose: () => void) {
  const { pathname } = useLocation();
  const initialPathname = useRef(pathname);

  useEffect(() => {
    if (initialPathname.current !== pathname) {
      handleClose();
      initialPathname.current = pathname;
    }
  }, [pathname]);
}

export default useMenuModal;
