import { useContext } from 'react';
import { StockPredictionFormContext } from '../contexts/StockPredictionFormContext';

function useStockPredictionFormContext() {
  const context = useContext(StockPredictionFormContext);
  if (!context) {
    throw Error('Context is null');
  }
  return context;
}

export default useStockPredictionFormContext;
