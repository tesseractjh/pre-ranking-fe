import API from '@api/index';
import useQuery from '@hooks/useQuery';

function usePredictionCount(category?: string) {
  const params = { category };
  return useQuery(
    ['predictionCount', params],
    () => API.prediction.getPredictionCount(params),
    {
      staleTime: 60 * 1000
    }
  );
}

export default usePredictionCount;
