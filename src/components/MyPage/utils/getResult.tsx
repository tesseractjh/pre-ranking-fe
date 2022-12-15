import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

const Result = styled.span<{ failure?: boolean }>`
  padding: ${pxToRem(3, 8)};
  border-radius: ${pxToRem(2)};
  background-color: ${({ failure, theme }) =>
    theme.color[failure ? 'BLACK' : 'PURPLE_500']};
  color: ${({ theme }) => theme.color.WHITE};
  user-select: none;
`;

const getResult = (result: number | null) => {
  if (result === null) {
    return '-';
  }
  return result ? <Result>적중</Result> : <Result failure>실패</Result>;
};

export default getResult;
