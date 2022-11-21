import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Header from './Header';

const Section = styled.section`
  padding-top: ${pxToRem(60)};
`;

function Layout() {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
    </>
  );
}

export default Layout;
