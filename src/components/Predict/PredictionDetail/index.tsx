import withErrorBoundary from '@components/hoc/withErrorBoundary';
import DetailInfo from './DetailInfo';
import DetailResult from './DetailResult';
import usePredictionInfo from './hooks/usePredictionInfo';

function PredictionDetail() {
  const info = usePredictionInfo();

  if (!info) {
    return null;
  }

  return (
    <>
      <DetailInfo {...info} />
      <DetailResult prediction={info.prediction} />
    </>
  );
}

export default withErrorBoundary(PredictionDetail);
