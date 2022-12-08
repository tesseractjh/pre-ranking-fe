import { useCallback } from 'react';
import usePrediction from '@hooks/queries/usePrediction';

function usePredictAll() {
  const { data, fetchNextPage } = usePrediction({});

  const handleIntersect = useCallback(async () => {
    const result = await fetchNextPage();
    return result;
  }, []);

  return {
    data: data?.pages.flatMap(({ predictions }) => predictions) ?? [],
    handleIntersect
  };
}

export default usePredictAll;
