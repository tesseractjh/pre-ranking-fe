import React, { ButtonHTMLAttributes } from 'react';
import styled, { CSSProperties } from 'styled-components';
import usePopup from './hooks/usePopup';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, CustomCSS {
  children: React.ReactNode;
  popup: React.ReactNode;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

const Container = styled.span<{
  $width?: CSSProperties['width'];
  $height?: CSSProperties['height'];
}>`
  position: relative;
  ${({ $width, $height }) =>
    ($width || $height) &&
    `
    display: inline-block;
    ${$width && `width: ${$width};`}
    ${$height && `height: ${$height};`}
  `}
`;

const StyledButton = styled.button<CustomCSS>`
  ${({ css }) => css || ''}
  width: 100%;
  height: 100%;
`;

function WithPopup({
  width,
  height,
  css,
  children,
  popup,
  onClick,
  ...props
}: Props) {
  const { isOpen, handleClick } = usePopup(onClick);

  return (
    <Container $width={width} $height={height}>
      <StyledButton css={css} type="button" {...props} onClick={handleClick}>
        {children}
      </StyledButton>
      {isOpen && popup}
    </Container>
  );
}

export default React.memo(WithPopup);
