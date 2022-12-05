import Modal from '@components/common/Modal';
import pxToRem from '@utils/pxToRem';
import React from 'react';
import { css } from 'styled-components';
import NavBar from '../../Menu/NavBar';

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
      <NavBar css={NavBarStyle} />
    </Modal>
  );
}

export default React.memo(MenuModal);
