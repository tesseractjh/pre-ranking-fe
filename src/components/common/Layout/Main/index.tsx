import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_TABLET,
  SUB_HEADER_HEIGHT_TABLET
} from '@constants/style';
import Header from './Header';
import Footer from './Footer';
import useSubMenu from './hooks/useSubMenu';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  min-height: 100vh;
`;

const Main = styled.main<{ hasSubMenu: boolean }>`
  flex: 1;
  padding-top: ${pxToRem(HEADER_HEIGHT)};

  ${({ hasSubMenu, theme }) =>
    theme.media.tablet(`
      padding-top: ${pxToRem(
        HEADER_HEIGHT_TABLET + (hasSubMenu ? SUB_HEADER_HEIGHT_TABLET : 0)
      )};
  `)}
`;

function MainLayout() {
  const hasSubMenu = useSubMenu();

  return (
    <Container>
      <Header hasSubMenu={hasSubMenu} />
      <Main hasSubMenu={hasSubMenu}>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default MainLayout;
