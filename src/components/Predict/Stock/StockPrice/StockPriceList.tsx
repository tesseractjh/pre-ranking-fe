import dateFormatter from '@utils/dateFormatter';
import PredictContainer from '../../PredictContainer';
import StockPriceItem from './StockPriceItem';
import PredictWrapper from '../../PredictWrapper';
import usePredictionList from '../../hooks/usePredictionList';

function StockPriceList() {
  const { data, handleIntersect } = usePredictionList('stock_price');

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
            <StockPriceItem prediction={prediction} endDate={endDate} />
          </PredictWrapper>
        );
      })}
    </PredictContainer>
  );
}

export default StockPriceList;
