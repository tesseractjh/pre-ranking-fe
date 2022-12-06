import { useLocation } from 'react-router-dom';

function useHeaderNav() {
  const { pathname } = useLocation();
  const [, page, id = 'all'] = pathname.split('/');

  return { page, id };
}

export default useHeaderNav;
