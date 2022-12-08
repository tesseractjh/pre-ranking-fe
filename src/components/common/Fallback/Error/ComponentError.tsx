import { css } from 'styled-components';
import Button, { Medium } from '@components/common/Button';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as RefreshIcon } from '@assets/icons/refresh.svg';
import Error from '.';

interface Props {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

const ContainerStyle = css`
  width: 100%;
  height: auto;
  padding: ${pxToRem(40, 0)};
`;

const RefreshButtonStyle = css`
  ${({ theme }) => theme.mixin.inlineFlex()}
  margin-top: ${pxToRem(30)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.WHITE};
    transition: transform 0.1s ease-in-out;
  }

  &:active {
    & > svg {
      transform: rotate(90deg);
    }
  }
`;

function ComponentError({ error, resetErrorBoundary }: Props) {
  return (
    <Error css={ContainerStyle}>
      <Button
        type="button"
        css={[Medium, RefreshButtonStyle]}
        onClick={resetErrorBoundary}
      >
        <RefreshIcon />
        새로고침
      </Button>
    </Error>
  );
}

export default ComponentError;
