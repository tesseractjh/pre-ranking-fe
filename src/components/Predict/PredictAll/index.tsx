import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import usePredictAll from '../hooks/usePredictAll';
import PredictContainer from '../PredictContainer';
import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../StockFluctuation/StockFluctuationItem';

function PredictAll() {
  const data = usePredictAll();

  return (
    <PredictContainer>
      {data.map((prediction) => (
        <PredictWrapper
          key={prediction.prediction_id}
          icon={StockIcon}
          category="종가 등락"
          all
        >
          <StockFluctuationItem prediction={prediction} />
        </PredictWrapper>
      ))}
    </PredictContainer>
  );
}

export default PredictAll;
