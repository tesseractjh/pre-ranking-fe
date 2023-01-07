import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import withErrorBoundary from '@components/hoc/withErrorBoundary';
import dateFormatter from '@utils/dateFormatter';
import PredictFilter from '../Filter';
import Checkbox from '../Filter/Checkbox';
import usePredictionList from '../hooks/usePredictionList';
import PredictContainer from '../PredictContainer';
import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../Stock/StockFluctuation/StockFluctuationItem';

function PredictAll() {
  const { data, handleIntersect } = usePredictionList('all');

  return (
    <>
      <PredictFilter>
        <Checkbox
          id="unsubmitted"
          category="all"
          content="아직 참여하지 않은 예측"
        />
      </PredictFilter>
      <PredictContainer data={data} onIntersect={handleIntersect}>
        {data.map((prediction) => {
          const endDate = dateFormatter.getEndDate(prediction.created_at);
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
    </>
  );
}

export default withErrorBoundary(PredictAll);
