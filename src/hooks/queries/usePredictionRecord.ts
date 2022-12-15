import API from '@api/index';
import useQuery from '@hooks/useQuery';

interface Props {
  category: string;
  page: number;
}

function usePredictionRecord({ category, page }: Props) {
  const params = { category, page };
  return useQuery(
    ['predictionRecord', params],
    () => API.prediction.getPredictionRecords(params),
    {
      staleTime: 15 * 1000,
      cacheTime: 60 * 1000,
      suspense: true,
      onError: () => {
        console.error('예측 기록 데이터 요청 실패');
      }
    }
  );
}

export default usePredictionRecord;
