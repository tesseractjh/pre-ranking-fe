import pxToRem from '@utils/pxToRem';
import { useRef } from 'react';
import styled from 'styled-components';
import type { NavBarLinkGroup } from './types/navBar';
import useNavBarGroup from './hooks/useNavBarGroup';
import NavBarLink from './NavBarLink';

const Container = styled.div<{ isOpen: boolean }>`
  & .chevron {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : 0)});
    transition: transform 0.2s ease-in-out;
  }
`;

const ChildrenContainer = styled.ul<{ height: number }>`
  overflow: hidden;
  position: relative;
  height: ${({ height }) => pxToRem(height)};
  margin-top: ${pxToRem(10)};
  transition: height 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${pxToRem(10)};
    height: 100%;
    border-right: 4px solid ${({ theme }) => theme.color.PURPLE_100};
  }
`;

function NavBarGroup({ icon, content, children }: NavBarLinkGroup) {
  const childrenContainer = useRef<HTMLUListElement>(null);
  const { isOpen, height, handleClick } = useNavBarGroup(
    childrenContainer,
    children
  );

  return (
    <Container isOpen={isOpen}>
      <NavBarLink
        type="group"
        icon={icon}
        content={content}
        onClick={handleClick}
      />
      <ChildrenContainer height={height} ref={childrenContainer}>
        {children.map((props) => (
          <NavBarLink key={props.content} type="child" {...props} />
        ))}
      </ChildrenContainer>
    </Container>
  );
}

export default NavBarGroup;
