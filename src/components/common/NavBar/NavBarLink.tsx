import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ChevronIcon } from '@assets/icons/chevron.svg';
import type { NavBarLinkButton } from './types/navBar';
import useNavBarLink from './hooks/useNavBarLink';

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

  ${({ theme }) =>
    theme.media.laptop(`
      & > .nav-link {
        font-size: ${pxToRem(16)};

        & svg {
          width: ${pxToRem(14)};
          height: ${pxToRem(14)};
          margin-right: ${pxToRem(8)};
        }
      }
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      & > .nav-link {
        border: none;
        padding: ${pxToRem(14, 10, 14, 20)};
        font-size: ${pxToRem(18)};

        & svg {
          width: ${pxToRem(16)};
          height: ${pxToRem(16)};
          margin-right: ${pxToRem(10)};
        }

        &.active {
          background-color: ${theme.color.PURPLE_400};
          color: ${theme.color.WHITE};
        }
      }
  `)}
`;

function NavBarLink({ type, icon: Icon, content, link, onClick }: Props) {
  const page = useNavBarLink();

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
      {link ? (
        <NavLink
          to={`/${page || 'predict'}/${link}`}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          end
        >
          {buttonContent}
        </NavLink>
      ) : (
        <button type="button" className="nav-link" onClick={onClick}>
          {buttonContent}
        </button>
      )}
    </Container>
  );
}

export default React.memo(NavBarLink);
