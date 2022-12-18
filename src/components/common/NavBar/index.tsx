import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import Category from './Category';
import useNavBar from './hooks/useNavBar';
import type { NavBarCategory } from './types/navBar';

interface Props extends CustomCSS {
  content: NavBarCategory[];
}

const TabletAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transfomr: translate3d(0, 0, 0);
  }
`;

const Wrapper = styled.nav<{ hasScroll: boolean } & CustomCSS>`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: ${({ hasScroll }) => (hasScroll ? pxToRem(4) : 0)};
    z-index: -1;
    height: 100%;
    border-right: 4px solid ${({ theme }) => theme.color.GRAY_100};
  }

  ${({ theme }) =>
    theme.media.tablet(css`
      display: none;
      animation: ${TabletAnimation} 0.2s ease-in-out 0.05s both;

      &::before {
        display: none;
      }
    `)}

  ${({ css }) => css || ''}
`;

const LogoWrapper = styled.div`
  display: none;
  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};

  ${({ theme }) =>
    theme.media.tablet(`
      display: block;
  `)}
`;

const Container = styled.ul`
  overflow-y: auto;
  overscroll-behavior: contain;
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(2))}
  position: sticky;
  top: ${pxToRem(60)};
  width: ${pxToRem(240)};
  max-height: calc(100vh - ${pxToRem(80)});
  padding: ${pxToRem(10, 0, 20)};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.GRAY_200};
  }

  &::-webkit-scrollbar-track {
    height: ${pxToRem(20)};
    background-color: transparent;
  }

  ${({ theme }) =>
    theme.media.laptop(`
      width: ${pxToRem(200)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      position: static;
      width: 100%;
      padding: 0;

      &::-webkit-scrollbar {
        display: none;
      }
  `)}
`;

function NavBar({ css, content }: Props) {
  const container = useRef<HTMLUListElement>(null);
  const hasScroll = useNavBar(container);

  return (
    <Wrapper css={css} hasScroll={hasScroll}>
      <LogoWrapper>
        <Link to="/">
          <Logo size="md" />
        </Link>
      </LogoWrapper>
      <Container ref={container}>
        {content.map((props) => (
          <Category key={props.content ?? ''} {...props} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default NavBar;
