import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as XMarkIcon } from '@assets/icons/xmark.svg';
import usePreventScroll from '@hooks/usePreventScroll';

interface Props extends CustomCSS {
  onClick: React.MouseEventHandler;
  title: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}

const Container = styled.div<CustomCSS>`
  overflow: hidden;
  position: absolute;
  top: calc(100% + ${pxToRem(4)});
  right: 0;
  z-index: 200;
  height: ${pxToRem(400)};
  border-radius: ${pxToRem(10)};
  ${({ theme }) => theme.mixin.shadow('rgb(0 0 0 / 30%)', '1px 2px 10px')};

  ${({ theme }) =>
    theme.media.tablet(`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
  `)}

  ${({ css }) => css || ''}
`;

const Header = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  padding: ${pxToRem(12, 20)};
  background-color: ${({ theme }) => theme.color.PURPLE_500};
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(10, 20)}
  `)}
`;

const Title = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()}
`;

const CloseButton = styled.button`
  ${({ theme }) => theme.mixin.inlineFlex()}
  display: none;
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};

  & > svg {
    width: ${pxToRem(18)};
    height: ${pxToRem(18)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.WHITE};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      display: inline-flex;
  `)}
`;

const Popup = React.forwardRef<HTMLDivElement, Props>(
  ({ css, onClick, title, header, children }, ref) => {
    usePreventScroll();

    return (
      <Container css={css} ref={ref} className="popup">
        <Header>
          <Title>
            <CloseButton type="button" onClick={onClick}>
              <XMarkIcon />
            </CloseButton>
            {title}
          </Title>
          {header}
        </Header>
        {children}
      </Container>
    );
  }
);
Popup.displayName = 'Popup';

export default Popup;
