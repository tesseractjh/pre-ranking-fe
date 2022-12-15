import { Suspense } from 'react';
import ComponentError from '@components/common/Fallback/Error/ComponentError';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import LayoutWithNavBar from '@components/common/LayoutWithNavBar';
import { NAV_BAR_LIST } from '@constants/navBar';
import useReload from '@hooks/useReload';
import Summary from './Summary';

function MyPageLayout() {
  const handleReload = useReload();
  return (
    <Suspense fallback={<ComponentLoading />}>
      <Summary />
      <LayoutWithNavBar
        navBarContent={NAV_BAR_LIST}
        errorFallback={ComponentError}
        onReset={handleReload}
      />
    </Suspense>
  );
}

export default MyPageLayout;
