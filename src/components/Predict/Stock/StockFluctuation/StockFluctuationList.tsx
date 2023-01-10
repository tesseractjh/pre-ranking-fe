import dateFormatter from '@utils/dateFormatter';
import PredictContainer from '../../PredictContainer';
import StockFluctuationItem from './StockFluctuationItem';
import PredictWrapper from '../../PredictWrapper';
import usePredictionList from '../../hooks/usePredictionList';

function StockFluctuationList() {
  const { data, handleIntersect } = usePredictionList('stock_fluctuation');

  return (
    <PredictContainer data={data} onIntersect={handleIntersect}>
      {data.map((prediction) => {
        const endDate = dateFormatter.getEndDate(prediction.created_at);
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
