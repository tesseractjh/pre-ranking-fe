import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import useReload from '@hooks/useReload';
import InnerContainer from '@components/common/InnerContainer';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import ComponentError from '@components/common/Fallback/Error/ComponentError';
import NavBar from '@components/common/NavBar';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_TABLET,
  SUB_HEADER_HEIGHT_TABLET
} from '@constants/style';
import { NAV_BAR_LIST } from '@constants/navBar';
import Breadcrumb from './Breadcrumb';
import Coin from './Coin';

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch', pxToRem(20))}
  margin-top: ${pxToRem(40)};

  ${({ theme }) =>
    theme.media.tablet(`
      margin-top: ${pxToRem(20)};
  `)}
`;

const Section = styled.section`
  flex: 1;
`;

const Sticky = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  position: sticky;
  top: ${pxToRem(HEADER_HEIGHT)};
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_300};
  margin-bottom: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) =>
    theme.media.tablet(`
      top: ${pxToRem(HEADER_HEIGHT_TABLET + SUB_HEADER_HEIGHT_TABLET)};
  `)}
`;

function MenuLayout() {
  const handleReload = useReload();

  return (
    <InnerContainer>
      <Flex>
        <NavBar content={NAV_BAR_LIST} />
        <ErrorBoundary
          FallbackComponent={ComponentError}
          onReset={handleReload}
        >
          <Suspense fallback={<ComponentLoading />}>
            <Section>
              <Sticky>
                <Breadcrumb />
                <Coin />
              </Sticky>
              <Outlet />
            </Section>
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </InnerContainer>
  );
}

export default MenuLayout;
