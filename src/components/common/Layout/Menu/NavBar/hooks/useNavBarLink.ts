import { useLocation } from 'react-router-dom';

function useNavBarLink() {
  const { pathname } = useLocation();
  const [, page] = pathname.split('/');

  return page;
}

export default useNavBarLink;
