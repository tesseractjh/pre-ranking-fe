import { css } from 'styled-components';

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.GRAY_400};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.GRAY_300};
  }
`;
