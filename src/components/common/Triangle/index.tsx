import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

export const Triangle = styled.span<{ negative?: boolean }>`
  display: inline-block;
  width: ${pxToRem(5)};
  height: ${pxToRem(9)};
  margin-right: ${pxToRem(4)};
  border-left: ${pxToRem(5)} solid transparent;
  border-right: ${pxToRem(5)} solid transparent;
  border-bottom: ${pxToRem(9)} solid ${({ theme }) => theme.color.RED_600};

  ${({ negative, theme }) =>
    negative &&
    `
      border-top: ${pxToRem(9)} solid ${theme.color.BLUE_600};
      border-bottom: none;
  `}
`;
