import React from 'react';
import { css } from 'styled-components';
import Popup from '@components/common/Popup';
import pxToRem from '@utils/pxToRem';

const ContainerStyle = css`
  width: ${pxToRem(400)};
  right: ${pxToRem(-50)};
`;

const NotificationPopup = React.forwardRef<HTMLDivElement>((props, ref) => (
  <Popup css={ContainerStyle} ref={ref}>
    알림 팝업
  </Popup>
));
NotificationPopup.displayName = 'NotificationPopup';

export default NotificationPopup;
