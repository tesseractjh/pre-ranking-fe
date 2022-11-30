import React from 'react';
import styled, { css } from 'styled-components';
import Popup from '@components/common/Popup';
import pxToRem from '@utils/pxToRem';
import MenuButton from './MenuButton';
import useSignout from './hooks/useSignout';

const List = styled.ul`
  &:not(:last-of-type) {
    padding-bottom: ${pxToRem(10)};
    margin-bottom: ${pxToRem(10)};
    border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  }
`;

const ContainerStyle = css`
  width: ${pxToRem(200)};
  height: auto;
  padding: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const LogoutButtonStyle = css`
  color: ${({ theme }) => theme.color.RED_500};
`;

const UserMenuPopup = React.forwardRef<HTMLDivElement>((props, ref) => {
  const handleSignout = useSignout();

  return (
    <Popup css={ContainerStyle} ref={ref}>
      <List>
        <MenuButton type="link" route="/mypage">
          마이페이지
        </MenuButton>
      </List>
      <List>
        <MenuButton
          type="button"
          css={LogoutButtonStyle}
          onClick={handleSignout}
        >
          로그아웃
        </MenuButton>
      </List>
    </Popup>
  );
});

UserMenuPopup.displayName = 'NotificationPopup';

export default UserMenuPopup;
