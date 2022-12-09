import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import usePredictAll from '../hooks/usePredictAll';
import PredictContainer from '../PredictContainer';
import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../StockFluctuation/StockFluctuationItem';

const PREDICTION_PERIOD = 24 * 60 * 60 * 1000;

function PredictAll() {
  const { data, handleIntersect } = usePredictAll();

  return (
    <PredictContainer onIntersect={handleIntersect}>
      {data.map((prediction) => {
        const endDate =
          new Date(prediction.created_at).getTime() + PREDICTION_PERIOD;
        return (
          <PredictWrapper
            key={prediction.prediction_id}
            icon={StockIcon}
            category="종가 등락"
            predictionValue={prediction.prediction_value}
            endDate={endDate}
            all
          >
            <StockFluctuationItem prediction={prediction} endDate={endDate} />
          </PredictWrapper>
        );
      })}
    </PredictContainer>
  );
}

export default PredictAll;
