import withErrorBoundary from '@components/hoc/withErrorBoundary';
import Record from './Record';

function MyPage() {
  return (
    <>
      <Record />
    </>
  );
}

export default withErrorBoundary(MyPage);
