import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import { Suspense } from 'react';
import Summary from './Summary';

function MyPage() {
  return (
    <Suspense fallback={<ComponentLoading />}>
      <Summary />
    </Suspense>
  );
}

export default MyPage;
