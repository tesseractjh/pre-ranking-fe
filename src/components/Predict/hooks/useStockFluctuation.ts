import usePrediction from '@hooks/queries/usePrediction';

function useStockFluctuation() {
  const { data } = usePrediction({
    category: 'info_stock_fluctuation'
  });

  return data?.predictions ?? [];
}

export default useStockFluctuation;
