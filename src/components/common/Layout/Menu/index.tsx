import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import Coin from './Coin';
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

const Sticky = styled.div`
  position: sticky;
  top: ${pxToRem(60)};

  ${({ theme }) =>
    theme.media.tablet(`
      top: ${pxToRem(50)};
  `)}
`;

function MenuLayout() {
  return (
    <>
      <InnerContainer>
        <Flex>
          <NavBar />
          <Section>
            <Sticky>
              <Breadcrumb />
              <Coin />
            </Sticky>
            <Outlet />
          </Section>
        </Flex>
      </InnerContainer>
    </>
  );
}

export default MenuLayout;
