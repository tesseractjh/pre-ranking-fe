import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Button, { Medium } from '@components/common/Button';
import { ButtonWithPopupContext } from '@components/common/Button/ButtonWithPopup';

interface Props extends CustomCSS {
  type: 'button' | 'link';
  onClick?: React.MouseEventHandler;
  route?: string;
  children: React.ReactNode;
}

const ButtonStyle = css`
  display: inline-block;
  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK};
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: ${pxToRem(10)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.GRAY_200};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(16, 0)};

      &:not(:last-of-type) {
        margin-bottom: 0;
      }
  `)}
`;

function MenuButton({ css, type, onClick, route, children }: Props) {
  const { handleClose } = useContext(ButtonWithPopupContext) ?? {};
  const navigate = useNavigate();

  return (
    <Button
      css={[Medium, ButtonStyle, css]}
      onClick={(event) => {
        if (type === 'button') {
          onClick?.(event);
        } else if (route) {
          navigate(route);
        }
        handleClose?.(event);
      }}
    >
      {children}
    </Button>
  );
}

export default MenuButton;
