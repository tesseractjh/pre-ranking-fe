import PredictContainer from '../PredictContainer';
import useStockFluctuation from '../hooks/useStockFluctuation';
import StockFluctuationItem from './StockFluctuationItem';
import PredictWrapper from '../PredictWrapper';

function StockFluctuationList() {
  const { data, handleIntersect } = useStockFluctuation();

  return (
    <PredictContainer onIntersect={handleIntersect}>
      {data.map((prediction) => (
        <PredictWrapper key={prediction.prediction_id}>
          <StockFluctuationItem prediction={prediction} />
        </PredictWrapper>
      ))}
    </PredictContainer>
  );
}

export default StockFluctuationList;
