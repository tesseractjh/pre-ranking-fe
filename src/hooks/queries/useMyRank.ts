import API from '@api/index';
import useQuery from '@hooks/useQuery';

function useMyRank(category?: string) {
  return useQuery(
    ['myRank', { category }],
    () => API.rank.getMyRank({ category }),
    {
      suspense: true,
      staleTime: 60 * 1000,
      onError: () => {
        console.error('내 순위 정보 요청 실패!');
      }
    }
  );
}

export default useMyRank;
