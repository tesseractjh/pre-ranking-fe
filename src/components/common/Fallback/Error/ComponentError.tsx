import { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Button, { Medium } from '@components/common/Button';
import { ReactComponent as RefreshIcon } from '@assets/icons/refresh.svg';
import { ReactComponent as WarningIcon } from '@assets/icons/warning.svg';
import useReload from '@hooks/useReload';
import Error from '.';

interface Props {
  resetErrorBoundary?: (...args: Array<unknown>) => void;
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

function ComponentError({ resetErrorBoundary }: Props) {
  const handleReset = useReload();

  return (
    <Error
      css={ContainerStyle}
      icon={WarningIcon}
      title="예측 정보를 불러오는데 실패하였습니다!"
      content="잠시 후 다시 시도해주세요."
      fullScreen={false}
    >
      <Button
        type="button"
        css={[Medium, RefreshButtonStyle]}
        onClick={resetErrorBoundary ?? handleReset}
      >
        <RefreshIcon />
        새로고침
      </Button>
    </Error>
  );
}

export default ComponentError;
