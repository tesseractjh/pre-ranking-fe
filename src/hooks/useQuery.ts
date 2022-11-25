import { useQuery as useReactQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function useQuery(...params: Parameters<typeof useReactQuery>) {
  const [queryKey, queryFn, options] = params;
  const navigate = useNavigate();

  return useReactQuery(queryKey, queryFn, {
    onError: (error) => {
      if (!error || !(error instanceof AxiosError)) {
        alert('알 수 없는 오류가 발생했습니다!');
        return;
      }

      const { code } = error;

      if (code === 'ERR_NETWORK') {
        alert('서버에 연결할 수 없습니다!');
        return;
      }

      if (!error?.response?.data?.error) {
        alert('알 수 없는 오류가 발생했습니다!');
        return;
      }

      const { status } = error.response;
      const { redirect } = error.response.data.error;

      if (status === 401) {
        alert('권한이 없습니다!');
      }

      if (redirect) {
        navigate(redirect);
      }
    },
    ...options
  });
}

export default useQuery;
