import React from 'react';
import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../Stock/StockFluctuation/StockFluctuationItem';

interface Props {
  prediction: Model.PredictionDetail;
  endDate: number;
}

function DetailInfo({ prediction, endDate }: Props) {
  let Component: React.ComponentType<{
    prediction: Model.PredictionDetail;
    endDate: number;
  }>;

  switch (prediction.prediction_category) {
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

export default React.memo(DetailInfo);
