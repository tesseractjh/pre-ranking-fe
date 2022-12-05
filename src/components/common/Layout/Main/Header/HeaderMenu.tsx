import { Link } from 'react-router-dom';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';
import { ReactComponent as BellIcon } from '@assets/icons/bell.svg';
import { ReactComponent as UserIcon } from '@assets/icons/user.svg';
import { ReactComponent as LoginIcon } from '@assets/icons/login.svg';
import pxToRem from '@utils/pxToRem';
import useLogin from '@hooks/useLogin';
import useNotification from '@hooks/queries/useNotification';
import { HoverToolTip } from '@components/common/Button';
import ButtonWithPopup from '@components/common/Button/ButtonWithPopup';
import NotificationPopup from './NotificationPopup';
import UserMenuPopup from './UserMenuPopup';

const Container = styled.ul`
  ${({ theme }) => theme.mixin.flex('space-between', 'center', pxToRem(10))}
`;

const MenuItem = styled.li<{ isHidden?: boolean }>`
  ${({ isHidden }) => isHidden && 'display: none;'}
  position: relative;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};

  ${({ theme }) =>
    theme.media.tablet(`
      width: ${pxToRem(32)};
      height: ${pxToRem(32)};
  `)}
`;

export const HeaderButtonStyle = (tooltip: string, hasBadge?: boolean) => css`
  ${({ theme }) => theme.mixin.inlineFlex()}
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.color.PURPLE_400};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.PURPLE_600};
  }

  &:hover,
  &:active {
    & > svg {
      fill: ${({ theme }) => theme.color.WHITE};
    }
  }

  & > svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }

  ${hasBadge &&
  css`
    &::before {
      content: '';
      position: absolute;
      top: ${pxToRem(5)};
      right: ${pxToRem(5)};
      width: ${pxToRem(6)};
      height: ${pxToRem(6)};
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.PURPLE_500};
    }

    &:hover::before {
      background-color: ${({ theme }) => theme.color.WHITE};
    }

    ${({ theme }) =>
      theme.media.tablet(`
        &::before {
          top: ${pxToRem(4)};
          right: ${pxToRem(4)};
          width: ${pxToRem(4)};
          height: ${pxToRem(4)};
        }
    `)}
  `}

  ${({ theme }) =>
    theme.media.tablet(`
    border-radius: 7px;

    & > svg {
      width: ${pxToRem(20)};
      height: ${pxToRem(20)};
    } 
  `)}

  ${HoverToolTip(tooltip)}
`;

const LinkButton = styled(Link)<{
  $css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: 100%;
  height: 100%;

  ${({ $css }) => $css || ''};
`;

function HeaderMenu() {
  const isLoggedIn = useLogin();
  const { data: notificationData } = useNotification(0, isLoggedIn);

  return (
    <Container>
      <MenuItem isHidden={!isLoggedIn}>
        <ButtonWithPopup
          width="100%"
          height="100%"
          css={HeaderButtonStyle(
            '알림',
            !!notificationData?.pages[0].notifications.length
          )}
          popup={NotificationPopup}
        >
          <BellIcon />
        </ButtonWithPopup>
      </MenuItem>
      <MenuItem isHidden={!isLoggedIn}>
        <ButtonWithPopup
          width="100%"
          height="100%"
          css={HeaderButtonStyle('내 정보')}
          popup={UserMenuPopup}
        >
          <UserIcon />
        </ButtonWithPopup>
      </MenuItem>
      <MenuItem isHidden={isLoggedIn}>
        <LinkButton to="/login" $css={HeaderButtonStyle('로그인')}>
          <LoginIcon />
        </LinkButton>
      </MenuItem>
    </Container>
  );
}

export default HeaderMenu;
