import API from '@api/index';
import useQuery from '@hooks/useQuery';

interface Props {
  category?: string;
  lastId?: number;
}

function usePrediction({ category, lastId }: Props) {
  const params = { category, lastId };
  return useQuery(
    ['prediction', params],
    () => API.prediction.getPredictions(params),
    {
      suspense: true,
      onError: () => {
        console.error('예측 데이터 요청 실패');
      }
    }
  );
}

export default usePrediction;
