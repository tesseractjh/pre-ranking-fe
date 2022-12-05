import useAccessToken from './queries/useAccessToken';

function useLogin() {
  const { data } = useAccessToken();
  return !!data;
}

export default useLogin;
