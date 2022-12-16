import API from '@api/index';
import useQuery from '@hooks/useQuery';

interface Props {
  category: string;
  containAll?: boolean;
}

function usePredictionCount({ category, containAll }: Props) {
  const params = { category, containAll };
  return useQuery(
    ['predictionCount', params],
    () => API.prediction.getPredictionCount(params),
    {
      staleTime: 60 * 1000
    }
  );
}

export default usePredictionCount;
