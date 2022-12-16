import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions
} from '@tanstack/react-query';
import {
  useQuery as useReactQuery,
  useQueryClient
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

function useQuery<T extends APIResponse>(
  queryKey: QueryKey,
  queryFn: QueryFunction<T>,
  options?: Omit<
    UseQueryOptions<T, unknown, T, QueryKey>,
    'queryFn' | 'queryKey'
  >
) {
  const queryClient = useQueryClient();

  return useReactQuery(queryKey, queryFn, {
    keepPreviousData: true,
    onError: (error) => {
      if (!error || !(error instanceof AxiosError)) {
        alert('알 수 없는 오류가 발생했습니다!');
        return;
      }

      const { code } = error;

      switch (code) {
        case 'ERR_NETWORK':
          alert('서버에 연결할 수 없습니다!');
          return;
        case 'ECONNABORTED':
          alert('연결 시간이 초과되었습니다!');
          return;
        default:
          break;
      }

      if (!error?.response?.data?.error) {
        alert('알 수 없는 오류가 발생했습니다!');
        return;
      }

      const { status } = error.response;
      const { message, redirect } = error.response.data.error;

      if (status === 401) {
        alert('로그인이 필요한 서비스입니다!');
      } else {
        if (options?.onError) {
          options.onError(error);
          return;
        }
        alert(message);
      }

      if (redirect) {
        window.location.href = `${import.meta.env.VITE_CLIENT_URL}/login`;
      }
    },
    ...options,
    onSuccess: (data) => {
      const { accessToken } = data;
      if (accessToken) {
        queryClient.setQueryData(['accessToken'], accessToken);
      }
      options?.onSuccess?.(data);
    }
  });
}

export default useQuery;
