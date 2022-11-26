import React from 'react';
import { css } from 'styled-components';
import Popup from '@components/common/Popup';
import pxToRem from '@utils/pxToRem';

const ContainerStyle = css`
  width: ${pxToRem(200)};
`;

const UserMenuPopup = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Popup css={ContainerStyle} ref={ref}>
    유저메뉴팝업
  </Popup>
));
UserMenuPopup.displayName = 'NotificationPopup';

export default UserMenuPopup;
