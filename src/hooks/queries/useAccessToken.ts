import API from '@api/index';
import useQuery from '@hooks/useQuery';
import { authInstance } from '@configs/axios';

function useAccessToken(options?: Parameters<typeof useQuery>[2]) {
  return useQuery(['accessToken'], API.user.getAccessToken, {
    suspense: true,
    staleTime: 60 * 60 * 1000,
    refetchInterval: 55 * 60 * 1000,
    onSuccess: (data) => {
      authInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    },
    ...options
  });
}

export default useAccessToken;
