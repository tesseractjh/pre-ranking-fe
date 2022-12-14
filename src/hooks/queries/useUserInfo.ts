import API from '@api/index';
import useQuery from '@hooks/useQuery';

function useUserInfo(enabled: boolean) {
  return useQuery(['user'], API.user.getUserInfo, {
    suspense: true,
    staleTime: 60 * 1000,
    enabled
  });
}

export default useUserInfo;
