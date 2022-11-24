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
