import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import pxToRem from '@utils/pxToRem';
import { HeaderButtonStyle } from './HeaderMenu';
import useMenu from '../hooks/useMenu';
import MenuModal from './MenuModal';

const Container = styled.button`
  ${HeaderButtonStyle('메뉴')}

  display: none;

  ${({ theme }) =>
    theme.media.tablet(`
      ${theme.mixin.inlineFlex()}
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};

      & > svg {
        width: ${pxToRem(20)};
        height: ${pxToRem(20)};
      }
  `)}
`;

function NavMenu() {
  const { isOpen, handleClick, handleClose } = useMenu();

  return (
    <>
      <Container type="button" onClick={handleClick}>
        <MenuIcon />
      </Container>
      <MenuModal isOpen={isOpen} handleClick={handleClose} />
    </>
  );
}

export default NavMenu;
