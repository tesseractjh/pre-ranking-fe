import { useLocation } from 'react-router-dom';

function useHeaderNav() {
  const { pathname } = useLocation();
  const [, page, ...params] = pathname.split('/');

  return { page, params: params.length ? params.join('/') : 'all' };
}

export default useHeaderNav;
