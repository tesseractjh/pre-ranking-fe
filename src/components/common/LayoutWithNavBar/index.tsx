import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import InnerContainer from '../InnerContainer';
import NavBar from '../NavBar';
import { NavBarCategory } from '../NavBar/types/navBar';

interface Props {
  navBarContent: NavBarCategory[];
  errorFallback: React.ComponentType<{
    error: Error;
    resetErrorBoundary: (...args: Array<unknown>) => void;
  }>;
  onReset?: (...args: Array<unknown>) => void;
  suspenseFallback?: React.ReactNode;
  componentBeforeOutlet?: React.ReactNode;
  componentAfterOutlet?: React.ReactNode;
}

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

function LayoutWithNavBar({
  navBarContent,
  errorFallback,
  onReset,
  suspenseFallback,
  componentBeforeOutlet,
  componentAfterOutlet
}: Props) {
  return (
    <InnerContainer>
      <Flex>
        <NavBar content={navBarContent} />
        <ErrorBoundary FallbackComponent={errorFallback} onReset={onReset}>
          <Suspense fallback={suspenseFallback}>
            <Section>
              {componentBeforeOutlet}
              <Outlet />
              {componentAfterOutlet}
            </Section>
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </InnerContainer>
  );
}

export default LayoutWithNavBar;
