import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import React from 'react';

interface Props extends CustomCSS {
  children: React.ReactNode;
}

const Container = styled.div<CustomCSS>`
  position: absolute;
  top: calc(100% + ${pxToRem(4)});
  right: 0;
  z-index: 200;
  height: ${pxToRem(400)};
  border-radius: ${pxToRem(10)};
  ${({ theme }) => theme.mixin.shadow('rgb(0 0 0 / 30%)', '1px 2px 10px')};
  ${({ css }) => css || ''}
`;

const Popup = React.forwardRef<HTMLDivElement, Props>(
  ({ css, children }, ref) => (
    <Container css={css} ref={ref} className="popup">
      {children}
    </Container>
  )
);
Popup.displayName = 'Popup';

export default Popup;
