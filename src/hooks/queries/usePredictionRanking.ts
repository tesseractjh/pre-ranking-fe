import API from '@api/index';
import useQuery from '@hooks/useQuery';

interface Props {
  category: string;
  page: number;
}

function usePredictionRanking({ category, page }: Props) {
  const params = { category, page };
  return useQuery(['predictionRank', params], () => API.rank.getRank(params), {
    staleTime: 15 * 1000,
    cacheTime: 60 * 1000,
    suspense: true,
    onError: () => {
      console.error('순위 데이터 요청 실패');
    }
  });
}

export default usePredictionRanking;
