import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ChevronIcon } from '@assets/icons/chevron.svg';
import type { NavBarLinkButton } from '../types/navBar';

interface Props extends Omit<NavBarLinkButton, 'link'> {
  link?: string;
  type?: 'group' | 'child';
  onClick?: React.MouseEventHandler;
}

const Container = styled.li<{ hasIndentation: boolean }>`
  ${({ hasIndentation }) => hasIndentation && `margin-left: ${pxToRem(20)};`}

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  & > .nav-link {
    ${({ theme }) => theme.mixin.inlineFlex('space-between')}
    width: 100%;
    padding: ${pxToRem(10)};
    border-right: 4px solid transparent;
    font-size: ${pxToRem(18)};
    color: ${({ theme }) => theme.color.GRAY_700};

    & svg {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
      margin-right: ${pxToRem(10)};
    }

    &.active {
      border-color: ${({ theme }) => theme.color.PURPLE_500};
      background-color: ${({ theme }) => theme.color.PURPLE_50};
      font-weight: 700;
      color: ${({ theme }) => theme.color.BLACK};
    }
  }
`;

function NavBarLink({
  type,
  icon: Icon,
  content,
  link = '__none__',
  onClick
}: Props) {
  const buttonContent = (
    <>
      <span>
        {Icon && <Icon />}
        {content}
      </span>
      {type === 'group' && <ChevronIcon className="chevron" />}
    </>
  );

  return (
    <Container
      as={type === 'child' ? 'li' : 'div'}
      hasIndentation={type === 'child'}
    >
      {link === '__none__' ? (
        <button type="button" className="nav-link" onClick={onClick}>
          {buttonContent}
        </button>
      ) : (
        <NavLink
          to={link}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          end
        >
          {buttonContent}
        </NavLink>
      )}
    </Container>
  );
}

export default React.memo(NavBarLink);
