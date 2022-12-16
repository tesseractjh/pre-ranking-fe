import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import { ReactComponent as AccuracyIcon } from '@assets/icons/accuracy.svg';
import useRecordSummary from '../hooks/useRecordSummary';

interface Props {
  category: string;
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(20))}
  padding: ${pxToRem(10, 0)};
  margin-bottom: ${pxToRem(10)};
  font-size: ${pxToRem(16)};
`;

const Info = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}

  & svg {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    fill: ${({ theme }) => theme.color.PURPLE_600};
  }
`;

const Bold = styled.strong`
  font-weight: 700;
`;

function RecordSummary({ category }: Props) {
  const { totalScore, rank, totalUserCount, totalCount, rightCount } =
    useRecordSummary(category);

  if (!rank) {
    return null;
  }

  return (
    <Container>
      <Info>
        <ScoreIcon />
        <Bold>{totalScore}점</Bold>({rank}위 / {totalUserCount}명)
      </Info>
      <Info>
        <AccuracyIcon />
        <Bold>{((rightCount * 100) / totalCount).toFixed(2)}%</Bold>(
        {rightCount} / {totalCount})
      </Info>
    </Container>
  );
}

export default RecordSummary;
