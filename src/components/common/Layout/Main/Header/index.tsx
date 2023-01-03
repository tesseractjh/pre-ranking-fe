import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InnerContainer from '@components/common/InnerContainer';
import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_TABLET,
  SUB_HEADER_HEIGHT_TABLET
} from '@constants/style';
import HeaderMenu from './HeaderMenu';
import useHeader from '../hooks/useHeader';
import HeaderNav from './HeaderNav';
import NavMenu from './NavMenu';

const Container = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: ${pxToRem(HEADER_HEIGHT)};
  border-bottom: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ isScrolled, theme }) =>
    isScrolled && `border-color: ${theme.color.GRAY_200};`}

  ${({ isScrolled, theme }) =>
    theme.media.tablet(`
      height: ${pxToRem(HEADER_HEIGHT_TABLET + SUB_HEADER_HEIGHT_TABLET)};
      ${isScrolled && `border-color: ${theme.color.PURPLE_400};`}
  `)}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  position: relative;
  height: 100%;

  ${({ theme }) =>
    theme.media.tablet(`
      height: ${pxToRem(HEADER_HEIGHT_TABLET)};
  `)}
`;

const LogoWrapper = styled.span`
  ${({ theme }) =>
    theme.media.tablet(`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);  
  `)}
`;

function Header() {
  const isScrolled = useHeader();

  return (
    <Container isScrolled={isScrolled}>
      <InnerContainer>
        <Flex>
          <NavMenu />
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <HeaderNav />
          <HeaderMenu />
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default Header;
