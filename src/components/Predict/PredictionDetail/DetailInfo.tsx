import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../StockFluctuation/StockFluctuationItem';
import usePredictionInfo from './hooks/usePredictionInfo';

function DetailInfo() {
  const info = usePredictionInfo();

  if (!info) {
    return null;
  }

  const { category, prediction, endDate } = info;

  let Component: React.ComponentType<{
    prediction: Model.PredictionDetail;
    endDate: number;
  }>;

  switch (category) {
    case 'info_stock_fluctuation':
      Component = StockFluctuationItem;
      break;
    default:
      return null;
  }

  return (
    <PredictWrapper
      predictionValue={prediction.prediction_value}
      endDate={endDate}
      detail
    >
      <Component prediction={prediction} endDate={endDate} />
    </PredictWrapper>
  );
}

export default DetailInfo;
