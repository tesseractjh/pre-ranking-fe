import styled from 'styled-components';
import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import { ReactComponent as AccuracyIcon } from '@assets/icons/accuracy.svg';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import useSummary from './hooks/useSummary';

const Container = styled.div`
  height: ${pxToRem(160)};
  background-color: ${({ theme }) => theme.color.PURPLE_900};
  color: ${({ theme }) => theme.color.GRAY_50};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  height: 100%;
  padding: ${pxToRem(30, 40)};
`;

const Left = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(10, 30))}
  flex-wrap: wrap;
  width: ${pxToRem(400)};
`;

const UserName = styled.strong`
  width: 100%;
  font-weight: 900;
  font-size: ${pxToRem(36)};
`;

const Level = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(18)};
`;

const Exp = styled.span`
  position: relative;
  width: ${pxToRem(300)};
  padding: ${pxToRem(5, 0)};
  border: 1px solid ${({ theme }) => theme.color.WHITE};
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.WHITE};
  text-align: center;
`;

const ExpBar = styled.span<{ ratio: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ ratio }) => ratio * 100}%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};
  mix-blend-mode: difference;
`;

const SummaryInfo = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'center', pxToRem(10))}
  flex-wrap: wrap;
  width: ${pxToRem(120)};
  height: 100%;

  & > svg {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    margin-bottom: ${pxToRem(6)};
    fill: ${({ theme }) => theme.color.WHITE};
  }
`;

const InfoText = styled.span`
  font-size: ${pxToRem(14)};
`;

function Summary() {
  const {
    userName,
    exp,
    level,
    requiredExp,
    ratio,
    totalScore,
    rank,
    totalUserCount,
    totalCount,
    rightCount,
    rightRatio,
    coin
  } = useSummary();

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <Left>
            <UserName>{userName}</UserName>
            <Level>Lv {level}</Level>
            <Exp>
              <ExpBar ratio={ratio} />
              {exp} / {requiredExp} ({Math.floor(ratio * 100)}%)
            </Exp>
          </Left>
          <SummaryInfo>
            <ScoreIcon />
            <InfoText>총점 {totalScore}점</InfoText>
            <InfoText>
              {rank.toLocaleString('ko-kr')}위 /{' '}
              {totalUserCount.toLocaleString('ko-kr')}명
            </InfoText>
          </SummaryInfo>
          <SummaryInfo>
            <AccuracyIcon />
            <InfoText>예측 적중률 {rightRatio}%</InfoText>
            <InfoText>
              {rightCount}회 / {totalCount}회
            </InfoText>
          </SummaryInfo>
          <SummaryInfo>
            <CoinIcon />
            <InfoText>{coin.toLocaleString('ko-kr')} 코인</InfoText>
          </SummaryInfo>
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}

export default Summary;
