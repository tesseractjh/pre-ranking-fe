import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Header from './Header';

const Main = styled.main`
  padding-top: ${pxToRem(60)};

  ${({ theme }) =>
    theme.media.tablet(`
      padding-top: ${pxToRem(50)};
  `)}
`;

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Layout;
