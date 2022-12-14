import API from '@api/index';
import useQuery from '@hooks/useQuery';

function usePredictionCount() {
  return useQuery(
    ['predictionCount'],
    () => API.prediction.getPredictionCount(),
    {
      staleTime: 60 * 1000
    }
  );
}

export default usePredictionCount;
