import useAccessToken from '@hooks/queries/useAccessToken';

function useHeaderMenu() {
  const { data } = useAccessToken();
  return !!data;
}

export default useHeaderMenu;
