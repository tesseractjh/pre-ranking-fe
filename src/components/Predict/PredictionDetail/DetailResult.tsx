import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import HorizontalBarChart from '@components/common/Chart/HorizontalBarChart';
import { ReactComponent as ChartIcon } from '@assets/icons/chart.svg';
import useDetailResult from './hooks/useDetailResult';

interface Props {
  prediction: Model.PredictionDetail;
}

const Title = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding-bottom: ${pxToRem(10)};
  margin: ${pxToRem(30, 0, 20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  font-weight: 700;
  font-size: ${pxToRem(20)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.PURPLE_700};
  }
`;

function DetailResult({ prediction }: Props) {
  const data = useDetailResult(prediction);

  return data.length ? (
    <>
      <Title>
        <ChartIcon />
        예측 결과
      </Title>
      <HorizontalBarChart data={data} />
    </>
  ) : null;
}

export default DetailResult;
