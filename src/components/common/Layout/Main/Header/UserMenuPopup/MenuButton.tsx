import Button, { Medium } from '@components/common/Button';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface Props extends CustomCSS {
  type: 'button' | 'link';
  onClick?: React.MouseEventHandler;
  route?: string;
  children: React.ReactNode;
}

const LinkButton = styled(Link)<{ $css: CustomCSS['css'] }>`
  ${({ $css }) => $css || ''}
`;

const ButtonStyle = css`
  display: inline-block;
  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.GRAY_200};
  }
`;

function MenuButton({ css, type, onClick, route, children }: Props) {
  if (type === 'button') {
    return (
      <Button css={[Medium, ButtonStyle, css]} onClick={onClick}>
        {children}
      </Button>
    );
  }

  if (type === 'link' && route) {
    return (
      <LinkButton $css={[Medium, ButtonStyle, css]} to={route}>
        {children}
      </LinkButton>
    );
  }

  return null;
}

export default MenuButton;
