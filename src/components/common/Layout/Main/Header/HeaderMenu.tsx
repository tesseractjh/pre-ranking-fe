import Button, { HoverToolTip } from '@components/common/Button';
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
import { Link } from 'react-router-dom';

const Container = styled.ul`
  ${({ theme }) => theme.mixin.flex('space-between', 'center', pxToRem(10))}
`;

const MenuItem = styled.li`
  width: 40px;
  height: 40px;
`;

const ButtonStyle = (tooltip: string) => css`
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
    width: 24px;
    height: 24px;
  }

  ${HoverToolTip(tooltip)}
`;

const LinkButton = styled(Link)<{
  $css?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: 40px;
  height: 40px;
  ${({ $css }) => $css || ''};
`;

function HeaderMenu() {
  return (
    <Container>
      <MenuItem>
        <Button.WithPopup
          width="100%"
          height="100%"
          css={ButtonStyle('알림')}
          popup={<div>팝업 - 알림목록</div>}
        >
          <BellIcon />
        </Button.WithPopup>
      </MenuItem>
      <MenuItem>
        <Button.WithPopup
          width="100%"
          height="100%"
          css={ButtonStyle('내 정보')}
          popup={<div>팝업메뉴</div>}
        >
          <UserIcon />
        </Button.WithPopup>
      </MenuItem>
      <MenuItem>
        <LinkButton to="/login" $css={ButtonStyle('로그인')}>
          <LoginIcon />
        </LinkButton>
      </MenuItem>
    </Container>
  );
}

export default HeaderMenu;
