import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch', pxToRem(20))}
  margin-top: ${pxToRem(40)};
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
            <Outlet />
          </Section>
        </Flex>
      </InnerContainer>
    </>
  );
}

export default PredictLayout;
