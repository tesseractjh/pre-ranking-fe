import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT_TABLET,
  SUB_HEADER_HEIGHT_TABLET
} from '@constants/style';
import useHeaderNav from '../hooks/useHeaderNav';

const Container = styled.ul`
  ${({ theme }) => theme.mixin.flex('space-between', 'center', pxToRem(30))}
  height: 100%;

  ${({ theme }) =>
    theme.media.tablet(`
      gap: 0;
      position: absolute;
      top: ${pxToRem(HEADER_HEIGHT_TABLET)};
      left: -${pxToRem(20)};
      width: 100vw;
      height: ${pxToRem(SUB_HEADER_HEIGHT_TABLET)};
      border-bottom: 1px solid transparent;
  `)}
`;

const Item = styled.li`
  height: 100%;
  font-size: ${pxToRem(18)};
  color: ${({ theme }) => theme.color.GRAY_600};

  &:hover {
    color: ${({ theme }) => theme.color.PURPLE_400};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      flex-shrink: 0;
      flex-grow: 1;
      font-size: ${pxToRem(16)};
      color: ${theme.color.GRAY_900};
  `)}
`;

const Anchor = styled(Link)<{ $isActive: boolean }>`
  ${({ theme }) => theme.mixin.flex()}
  position: relative;
  height: 100%;

  ${({ theme }) =>
    theme.media.tablet(`
      background-color: ${theme.color.PURPLE_100};
  `)}

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      font-weight: 700;
      color: ${theme.color.PURPLE_600};

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + ${pxToRem(10)});
        border-bottom: 2px solid ${theme.color.PURPLE_500};
      }

      ${theme.media.tablet(`
        background-color: ${theme.color.PURPLE_400};
        color: ${theme.color.WHITE};
        &::after {
          display: none;
        }
    `)}
    `}
`;

function HeaderNav() {
  const { page, params } = useHeaderNav();

  return (
    <Container>
      <Item>
        <Anchor to={`/predict/${params}`} $isActive={page === 'predict'}>
          예측
        </Anchor>
      </Item>
      <Item>
        <Anchor to={`/ranking/${params}`} $isActive={page === 'ranking'}>
          랭킹
        </Anchor>
      </Item>
    </Container>
  );
}

export default HeaderNav;
