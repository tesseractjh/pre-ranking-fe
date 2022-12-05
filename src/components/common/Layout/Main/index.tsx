import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding-top: ${pxToRem(60)};

  ${({ theme }) =>
    theme.media.tablet(`
      padding-top: ${pxToRem(50)};
  `)}
`;

function MainLayout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}

export default MainLayout;
