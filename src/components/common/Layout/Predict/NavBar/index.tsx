import pxToRem from '@utils/pxToRem';
import { useRef } from 'react';
import styled from 'styled-components';
import NAV_BAR_LIST from '../constants/navBar';
import Category from './Category';
import useNavBar from './hooks/useNavBar';

const Wrapper = styled.nav<{ hasScroll: boolean }>`
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
`;

const Container = styled.ul`
  overflow-y: auto;
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(2))}
  position: sticky;
  top: ${pxToRem(80)};
  width: ${pxToRem(240)};
  max-height: calc(100vh - ${pxToRem(80)});

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
`;

function NavBar() {
  const container = useRef<HTMLUListElement>(null);
  const hasScroll = useNavBar(container);

  return (
    <Wrapper hasScroll={hasScroll}>
      <Container ref={container}>
        {NAV_BAR_LIST.map((props) => (
          <Category key={props.content ?? ''} {...props} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default NavBar;
