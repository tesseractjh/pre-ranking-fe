import React from 'react';
import styled, { css } from 'styled-components';
import Popup from '@components/common/Popup';
import pxToRem from '@utils/pxToRem';
import MenuButton from './MenuButton';
import useSignout from './hooks/useSignout';

interface Props {
  onClick: React.MouseEventHandler;
}

const Container = styled.div`
  padding: ${pxToRem(10)};

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(10, 0)};
  `)}
`;

const List = styled.ul`
  &:not(:last-of-type) {
    padding-bottom: ${pxToRem(10)};
    margin-bottom: ${pxToRem(10)};
    border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  }
`;

const ContainerStyle = css`
  right: ${pxToRem(-10)};
  width: ${pxToRem(200)};
  height: auto;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const LogoutButtonStyle = css`
  color: ${({ theme }) => theme.color.RED_500};
`;

const UserMenuPopup = React.forwardRef<HTMLDivElement, Props>(
  ({ onClick }, ref) => {
    const handleSignout = useSignout();

    return (
      <Popup css={ContainerStyle} ref={ref} onClick={onClick} title="내 정보">
        <Container>
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
        </Container>
      </Popup>
    );
  }
);

UserMenuPopup.displayName = 'NotificationPopup';

export default UserMenuPopup;
