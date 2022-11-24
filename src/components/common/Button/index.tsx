import type { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, CustomCSS {
  children: React.ReactNode;
}

const Container = styled.button<CustomCSS>`
  ${({ css }) => css || ''}
`;

function Button({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>;
}

export * from './Styled';
export default Button;
