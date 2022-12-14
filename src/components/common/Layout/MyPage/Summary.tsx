import styled from 'styled-components';
import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import { ReactComponent as AccuracyIcon } from '@assets/icons/accuracy.svg';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import useSummary from './hooks/useSummary';

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.PURPLE_900};
  color: ${({ theme }) => theme.color.GRAY_50};
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between', 'center', pxToRem(10))}
  height: 100%;
  padding: ${pxToRem(30)};

  ${({ theme }) =>
    theme.media.laptop(`
      padding: ${pxToRem(30, 10)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      flex-wrap: wrap;
      gap: ${pxToRem(30, 10)};
      padding: ${pxToRem(20, 0)};
  `)}
`;

const Left = styled.div`
  flex: 1;
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(10, 30))}
  flex-wrap: wrap;
  margin-right: ${pxToRem(30)};

  ${({ theme }) =>
    theme.media.laptop(`
      margin-right: ${pxToRem(20)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      flex-basis: 100%;
      gap: ${pxToRem(10, 20)};
      margin: 0;
  `)}
`;

const UserName = styled.strong`
  width: 100%;
  font-weight: 900;
  font-size: ${pxToRem(36)};

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(30)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      width: auto;
      font-size: ${pxToRem(24)};
  `)}
`;

const Level = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(18)};

  ${({ theme }) =>
    theme.media.tablet(`
      font-weight: 900;
      font-size: ${pxToRem(16)};
  `)}
`;

const Exp = styled.span`
  position: relative;
  width: ${pxToRem(300)};
  padding: ${pxToRem(5, 0)};
  border: 1px solid ${({ theme }) => theme.color.WHITE};
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.WHITE};
  text-align: center;

  ${({ theme }) =>
    theme.media.laptop(`
      width: ${pxToRem(250)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      width: 100%;
  `)}
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
  align-self: stretch;
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'center', pxToRem(10))}
  flex-wrap: wrap;
  flex: 1;

  & > svg {
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    margin-bottom: ${pxToRem(6)};
    fill: ${({ theme }) => theme.color.WHITE};
  }

  ${({ theme }) =>
    theme.media.laptop(`
      gap: ${pxToRem(8)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      flex-basis: ${pxToRem(130)};

      & > svg {
        width: ${pxToRem(28)};
        height: ${pxToRem(28)};
      }
`)}
`;

const InfoText = styled.span`
  font-size: ${pxToRem(14)};

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(12)};
  `)}
`;

const InfoTextLarge = styled.span`
  font-size: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(14)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(13)};
  `)}
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
            <InfoTextLarge>총점 {totalScore}점</InfoTextLarge>
            <InfoText>
              {rank.toLocaleString('ko-kr')}위 /{' '}
              {totalUserCount.toLocaleString('ko-kr')}명
            </InfoText>
          </SummaryInfo>
          <SummaryInfo>
            <AccuracyIcon />
            <InfoTextLarge>적중률 {rightRatio}%</InfoTextLarge>
            <InfoText>
              {rightCount}회 / {totalCount}회
            </InfoText>
          </SummaryInfo>
          <SummaryInfo>
            <CoinIcon />
            <InfoTextLarge>{coin.toLocaleString('ko-kr')} 코인</InfoTextLarge>
          </SummaryInfo>
        </Wrapper>
      </InnerContainer>
    </Container>
  );
}

export default Summary;
