import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InnerContainer from '@components/common/InnerContainer';
import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import HeaderMenu from './HeaderMenu';
import useHeader from './hooks/useHeader';

const Container = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: ${pxToRem(60)};
  border-bottom: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ isScrolled, theme }) =>
    isScrolled ? `border-color: ${theme.color.GRAY_200};` : ''}

  ${({ theme }) =>
    theme.media.tablet(`
      height: ${pxToRem(50)};
  `)}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  height: 100%;
`;

function Header() {
  const isScrolled = useHeader();

  return (
    <Container isScrolled={isScrolled}>
      <InnerContainer>
        <Flex>
          <Link to="/">
            <Logo />
          </Link>
          <HeaderMenu />
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default Header;
