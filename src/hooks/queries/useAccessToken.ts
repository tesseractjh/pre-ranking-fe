import API from '@api/index';
import useQuery from '@hooks/useQuery';

function useAccessToken() {
  return useQuery(['accessToken'], API.user.getAccessToken, {
    staleTime: 55 * 60 * 1000
  });
}

export default useAccessToken;
