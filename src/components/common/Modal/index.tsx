import React from 'react';
import styled from 'styled-components';

interface Props extends CustomCSS {
  isOpen: boolean;
  handleClick: React.MouseEventHandler;
  children: React.ReactNode;
}

const Container = styled.div<CustomCSS>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  ${({ css }) => css || ''}
`;

const Background = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: default;
`;

function Modal({ css, isOpen, handleClick, children }: Props) {
  return isOpen ? (
    <Container css={css}>
      <Background type="button" onClick={handleClick} />
      {children}
    </Container>
  ) : null;
}

export default React.memo(Modal);
