import { Suspense } from 'react';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import LayoutWithNavBar from '@components/common/LayoutWithNavBar';
import { NAV_BAR_LIST } from '@constants/navBar';
import Summary from './Summary';

function MyPageLayout() {
  return (
    <>
      <Suspense fallback={<ComponentLoading />}>
        <Summary />
      </Suspense>
      <LayoutWithNavBar
        navBarContent={NAV_BAR_LIST}
        suspenseFallback={<ComponentLoading />}
      />
    </>
  );
}

export default MyPageLayout;
