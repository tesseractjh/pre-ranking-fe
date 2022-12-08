import pxToRem from '@utils/pxToRem';
import { css, keyframes } from 'styled-components';

const AnimationFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Large = css`
  padding: ${pxToRem(12, 16)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.PURPLE_500};
  font-weight: 600;
  font-size: ${pxToRem(18)};
  color: ${({ theme }) => theme.color.WHITE};

  &:hover {
    background-color: ${({ theme }) => theme.color.PURPLE_400};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.PURPLE_600};
  }
`;

export const Medium = css`
  padding: ${pxToRem(8, 10)};
  border-radius: ${pxToRem(6)};
  background-color: ${({ theme }) => theme.color.PURPLE_500};
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.WHITE};

  &:hover {
    background-color: ${({ theme }) => theme.color.PURPLE_400};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.PURPLE_600};
  }
`;

export const HoverToolTip = (content: string) => css`
  position: relative;

  &:hover::after {
    content: '${content}';
    position: absolute;
    top: calc(100% + ${pxToRem(4)});
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    opacity: 0;
    min-width: 100%;
    width: fit-content;
    padding: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.GRAY_800};
    font-size: ${pxToRem(12)};
    white-space: nowrap;
    color: ${({ theme }) => theme.color.WHITE};
    animation: ${AnimationFadeIn} 0.2s ease-in-out 0.5s forwards alternate;
  }
`;

export const HoverInactive = (content: string) => css`
  overflow: hidden;
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &::after {
      content: '${content}';
      ${({ theme }) => theme.mixin.inlineFlex()}
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-5deg);
      padding: ${pxToRem(2)};
      border: 2px solid ${({ theme }) => theme.color.WHITE};
      color: ${({ theme }) => theme.color.WHITE};
    }
  }
`;
