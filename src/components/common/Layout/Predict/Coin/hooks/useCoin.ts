import useUserInfo from '@hooks/queries/useUserInfo';
import useLogin from '@hooks/useLogin';

function useCoin() {
  const isLoggedIn = useLogin();
  const { data } = useUserInfo(isLoggedIn);

  return data?.user?.coin;
}

export default useCoin;
