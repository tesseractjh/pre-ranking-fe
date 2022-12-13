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
import MenuButton from './MenuButton';
import HeaderNav from './HeaderNav';

interface Props {
  hasSubMenu: boolean;
}

const Container = styled.header<{ isScrolled: boolean; hasSubMenu: boolean }>`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: ${pxToRem(HEADER_HEIGHT)};
  border-bottom: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ isScrolled, theme }) =>
    isScrolled && `border-color: ${theme.color.GRAY_200};`}

  ${({ isScrolled, hasSubMenu, theme }) =>
    theme.media.tablet(`
      height: ${pxToRem(
        HEADER_HEIGHT_TABLET + (hasSubMenu ? SUB_HEADER_HEIGHT_TABLET : 0)
      )};

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

function Header({ hasSubMenu }: Props) {
  const isScrolled = useHeader();

  return (
    <Container isScrolled={isScrolled} hasSubMenu={hasSubMenu}>
      <InnerContainer>
        <Flex>
          <MenuButton />
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <HeaderNav hasSubMenu={hasSubMenu} />
          <HeaderMenu />
        </Flex>
      </InnerContainer>
    </Container>
  );
}

export default Header;
