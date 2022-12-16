import type { ButtonHTMLAttributes } from 'react';
import React, { useRef, createContext, useMemo } from 'react';
import styled, { CSSProperties } from 'styled-components';
import usePopup from './hooks/usePopup';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, CustomCSS {
  children: React.ReactNode;
  popup: React.ForwardRefExoticComponent<
    { onClick: React.MouseEventHandler } & React.RefAttributes<HTMLDivElement>
  >;
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

export const ButtonWithPopupContext = createContext<{
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
} | null>(null);

function ButtonWithPopup({
  width,
  height,
  css,
  children,
  popup: Popup,
  onClick,
  ...props
}: Props) {
  const button = useRef<HTMLButtonElement>(null);
  const popup = useRef<HTMLDivElement>(null);
  const { isHidden, handleClick } = usePopup(popup, button, onClick);

  const contextValue = useMemo(
    () => ({ handleClose: handleClick }),
    [handleClick]
  );

  return (
    <ButtonWithPopupContext.Provider value={contextValue}>
      <Container $width={width} $height={height}>
        <StyledButton
          css={css}
          type="button"
          {...props}
          onClick={handleClick}
          ref={button}
        >
          {children}
        </StyledButton>
        {!isHidden && <Popup ref={popup} onClick={handleClick} />}
      </Container>
    </ButtonWithPopupContext.Provider>
  );
}

export default React.memo(ButtonWithPopup);
