import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import NavBar from './NavBar';

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

function PredictLayout() {
  return (
    <>
      <InnerContainer>
        <Flex>
          <NavBar />
          <Section>
            <Breadcrumb />
            <Outlet />
          </Section>
        </Flex>
      </InnerContainer>
    </>
  );
}

export default PredictLayout;
