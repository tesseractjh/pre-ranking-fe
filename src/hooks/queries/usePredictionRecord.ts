import API from '@api/index';
import { useInfiniteQuery } from '@tanstack/react-query';

function usePredictionRecord(category: string) {
  const params = { category };
  return useInfiniteQuery(
    ['predictionRecord', params],
    ({ pageParam = 0 }) =>
      API.prediction.getPredictionRecords({ ...params, lastId: pageParam }),
    {
      staleTime: 15 * 1000,
      cacheTime: 60 * 1000,
      suspense: true,
      getNextPageParam: (lastPage) =>
        lastPage.predictions[0] &&
        lastPage.predictions[lastPage.predictions.length - 1].prediction_id,
      onError: () => {
        console.error('예측 기록 데이터 요청 실패');
      }
    }
  );
}

export default usePredictionRecord;
