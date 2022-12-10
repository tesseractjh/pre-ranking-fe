import { useCallback } from 'react';
import usePrediction from '@hooks/queries/usePrediction';

function useStockFluctuation() {
  const { data, fetchNextPage } = usePrediction({
    category: 'stock_fluctuation'
  });

  const handleIntersect = useCallback(async () => {
    const result = await fetchNextPage();
    return result;
  }, []);

  return {
    data: data?.pages.flatMap(({ predictions }) => predictions) ?? [],
    handleIntersect
  };
}

export default useStockFluctuation;
