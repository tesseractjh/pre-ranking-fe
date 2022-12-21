import withErrorBoundary from '@components/hoc/withErrorBoundary';
import DetailInfo from './DetailInfo';

function PredictionDetail() {
  return (
    <>
      <DetailInfo />
    </>
  );
}

export default withErrorBoundary(PredictionDetail);
