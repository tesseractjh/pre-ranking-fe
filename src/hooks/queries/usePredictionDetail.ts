import API from '@api/index';
import useQuery from '@hooks/useQuery';

function usePredictionDetail(id: number, enabled = true) {
  const params = { id };
  return useQuery(
    ['predictionDetail', params],
    () => API.prediction.getPredictionDetail(params),
    {
      enabled,
      suspense: true,
      staleTime: 15 * 1000,
      cacheTime: 60 * 1000,
      onError: () => {
        console.error('예측 상세 데이터 요청 실패!');
      }
    }
  );
}

export default usePredictionDetail;
