import API from '@api/index';
import useQuery from '@hooks/useQuery';

function useMyRank(category?: string) {
  return useQuery(
    ['myRank', { category }],
    () => API.rank.getMyRank({ category }),
    {
      suspense: true,
      staleTime: 60 * 1000
    }
  );
}

export default useMyRank;
