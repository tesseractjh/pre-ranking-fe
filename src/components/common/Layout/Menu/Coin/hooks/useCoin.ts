import { useLocation } from 'react-router-dom';
import useUserInfo from '@hooks/queries/useUserInfo';
import useLogin from '@hooks/useLogin';

function useCoin() {
  const { pathname } = useLocation();
  const [, page] = pathname.split('/');
  const isLoggedIn = useLogin();
  const { data } = useUserInfo(isLoggedIn);

  return page === 'predict' && data?.user?.coin;
}

export default useCoin;
