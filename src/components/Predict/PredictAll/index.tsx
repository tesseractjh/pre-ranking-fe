import withErrorBoundary from '@components/hoc/withErrorBoundary';
import PredictFilter from '../Filter';
import Checkbox from '../Filter/Checkbox';
import usePredictionList from '../hooks/usePredictionList';
import PredictContainer from '../PredictContainer';
import PredictionItem from './PredictionItem';

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
        {data.map((prediction) => (
          <PredictionItem
            key={prediction.prediction_id}
            prediction={prediction}
          />
        ))}
      </PredictContainer>
    </>
  );
}

export default withErrorBoundary(PredictAll);
