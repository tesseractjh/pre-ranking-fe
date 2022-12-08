import API from '@api/index';
import useInfiniteQuery from '@hooks/useInfiniteQuery';

interface Props {
  category?: string;
}

function usePrediction({ category }: Props) {
  const params = { category };
  return useInfiniteQuery(
    ['prediction', params],
    ({ pageParam = 0 }) =>
      API.prediction.getPredictions({ category, lastId: pageParam }),
    {
      suspense: true,
      getNextPageParam: (lastPage) =>
        lastPage.predictions[0] &&
        lastPage.predictions[lastPage.predictions.length - 1].prediction_id,
      onError: () => {
        console.error('예측 데이터 요청 실패');
      }
    }
  );
}

export default usePrediction;
