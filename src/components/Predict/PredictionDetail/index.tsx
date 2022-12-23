import withErrorBoundary from '@components/hoc/withErrorBoundary';
import DetailInfo from './DetailInfo';
import DetailResult from './DetailResult';
import DetailStatus from './DetailStatus';
import usePredictionInfo from './hooks/usePredictionInfo';

function PredictionDetail() {
  const info = usePredictionInfo();

  if (!info) {
    return null;
  }

  return (
    <>
      <DetailInfo {...info} />
      <DetailStatus prediction={info.prediction} />
      <DetailResult prediction={info.prediction} />
    </>
  );
}

export default withErrorBoundary(PredictionDetail);
