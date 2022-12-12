import React from 'react';
import { css } from 'styled-components';
import Modal from '@components/common/Modal';
import NavBar from '@components/common/NavBar';
import pxToRem from '@utils/pxToRem';
import { NAV_BAR_LIST } from '@constants/navBar';

const ModalStyle = css`
  ${({ theme }) =>
    theme.media.desktop(`
      display: none;
  `)}
`;

const NavBarStyle = css`
  ${({ theme }) =>
    theme.media.tablet(`
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: ${pxToRem(240)};
      height: 100%;
      background-color: ${theme.color.WHITE};
  `)}
`;

function MenuModal(
  props: Omit<React.ComponentProps<typeof Modal>, 'children'>
) {
  return (
    <Modal {...props} css={ModalStyle}>
      <NavBar css={NavBarStyle} content={NAV_BAR_LIST} />
    </Modal>
  );
}

export default React.memo(MenuModal);
