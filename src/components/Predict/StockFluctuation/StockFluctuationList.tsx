import PredictContainer from '../PredictContainer';
import useStockFluctuation from './hooks/useStockFluctuation';
import StockFluctuationItem from './StockFluctuationItem';
import PredictWrapper from '../PredictWrapper';

const PREDICTION_PERIOD = 24 * 60 * 60 * 1000;

function StockFluctuationList() {
  const { data, handleIntersect } = useStockFluctuation();

  return (
    <PredictContainer onIntersect={handleIntersect}>
      {data.map((prediction) => {
        const endDate =
          new Date(prediction.created_at).getTime() + PREDICTION_PERIOD;
        return (
          <PredictWrapper
            key={prediction.prediction_id}
            predictionValue={prediction.prediction_value}
            endDate={endDate}
          >
            <StockFluctuationItem prediction={prediction} endDate={endDate} />
          </PredictWrapper>
        );
      })}
    </PredictContainer>
  );
}

export default StockFluctuationList;
