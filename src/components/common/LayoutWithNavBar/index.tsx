import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import InnerContainer from '../InnerContainer';
import NavBar from '../NavBar';
import { NavBarCategory } from '../NavBar/types/navBar';

interface Props {
  navBarContent: NavBarCategory[];
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
  suspenseFallback,
  componentBeforeOutlet,
  componentAfterOutlet
}: Props) {
  const section = (
    <Section>
      {componentBeforeOutlet}
      <Outlet />
      {componentAfterOutlet}
    </Section>
  );

  return (
    <InnerContainer>
      <Flex>
        <NavBar content={navBarContent} />
        {suspenseFallback ? (
          <Suspense fallback={suspenseFallback}>{section}</Suspense>
        ) : (
          section
        )}
      </Flex>
    </InnerContainer>
  );
}

export default LayoutWithNavBar;
