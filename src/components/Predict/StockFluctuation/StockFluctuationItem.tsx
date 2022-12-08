import styled, { css } from 'styled-components';
import Button, { Medium } from '@components/common/Button';
import dateFormatter from '@utils/dateFormatter';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import COIN_REQUIREMENTS from '../constants/requirements';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
    };
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch')}
`;

const Left = styled.div`
  flex: 1;
  ${({ theme }) => theme.mixin.flexColumn('space-between', 'stretch')}
  padding: ${pxToRem(16)};
  border-right: 1px solid ${({ theme }) => theme.color.GRAY_300};
`;

const PrevDate = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(16)};
`;

const StockInfoTop = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'flex-end', pxToRem(10))}
  font-size: ${pxToRem(14)};
`;

const StockName = styled.strong`
  font-weight: 700;
  font-size: ${pxToRem(28)};
`;

const MarketCategory = styled.span`
  padding: ${pxToRem(1, 2)};
  border: 1px solid ${({ theme }) => theme.color.GRAY_600};
  font-weight: 600;
  font-size: ${pxToRem(10)};
`;

const StockInfoBottom = styled.div<{ vs: number }>`
  ${({ theme }) => theme.mixin.flex('flex-start', 'flex-end', pxToRem(16))}
  margin-top: ${pxToRem(10)};
  font-size: ${pxToRem(14)};

  color: ${({ vs, theme }) => {
    if (!vs) {
      return theme.color.BLACK;
    }
    return theme.color[vs > 0 ? 'RED_600' : 'BLUE_600'];
  }};
`;

const StockPrice = styled.strong`
  font-weight: 900;
  font-size: ${pxToRem(32)};
  letter-spacing: -2px;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const PredictInfo = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('center', 'flex-start', pxToRem(6))}
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.GRAY_800};
`;

const Right = styled.div`
  width: ${pxToRem(240)};
  padding: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.GRAY_300};
`;

const RightContainer = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  height: 100%;
  padding: ${pxToRem(8)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const NextDate = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(16)};
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: ${pxToRem(20, 0, 10)};
`;

const PredictButton = styled.button<CustomCSS>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: 100%;
  height: ${pxToRem(40)};
  font-weight: 700;
  font-size: ${pxToRem(20)};

  ${({ css }) => css || ''}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch', pxToRem(10))}
  padding: ${pxToRem(0, 10)};
`;

const Coin = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')};
  width: ${pxToRem(50)};
  font-weight: 700;
  font-size: ${pxToRem(14)};

  & > svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }
`;

const Triangle = styled.span<{ negative?: boolean }>`
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

const IncreaseStyle = css`
  border: 1px solid ${({ theme }) => theme.color.RED_200};
  border-bottom: none;
  background-color: ${({ theme }) => theme.color.RED_50};

  &:hover {
    background-color: ${({ theme }) => theme.color.RED_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.RED_200};
  }
`;

const DecreaseStyle = css`
  border: 1px solid ${({ theme }) => theme.color.BLUE_200};
  border-top: none;
  background-color: ${({ theme }) => theme.color.BLUE_50};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.BLUE_200};
  }
`;

const SubmitButtonStyle = css`
  flex: 1;

  &:disabled {
    background-color: ${({ theme }) => theme.color.GRAY_400};
    cursor: not-allowed;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.GRAY_400};
      color: ${({ theme }) => theme.color.WHITE};
    }
  }
`;

function StockFluctuationItem({ prediction }: Props) {
  const {
    created_at: startDate,
    last_date: prevDate,
    result_date: nextDate,
    stock_name: stockName,
    short_code: code,
    market_category: market,
    last_price: price,
    vs,
    fluctuation_rate: rate,
    participant_count: participantCount
  } = prediction;

  const startDateObj = new Date(startDate);
  startDateObj.setTime(startDateObj.getTime() + 24 * 60 * 60 * 1000);

  return (
    <Container>
      <Left>
        <PrevDate>{dateFormatter.getFromMonthToDay(prevDate)}</PrevDate>
        <div>
          <StockInfoTop>
            <StockName>{stockName}</StockName>
            {code}
            <MarketCategory>{market}</MarketCategory>
          </StockInfoTop>
          <StockInfoBottom vs={vs}>
            <StockPrice>{price.toLocaleString('ko-kr')}</StockPrice>
            <Bold>
              <Triangle negative={vs < 0} />
              {Math.abs(vs).toLocaleString('ko-kr')}
            </Bold>
            <Bold>{rate}%</Bold>
          </StockInfoBottom>
        </div>
        <PredictInfo>
          <span>
            예측 참여 | <Bold>{participantCount}명</Bold>
          </span>
          <span>
            예측 마감 |{' '}
            <Bold>{dateFormatter.getFromMonthToMinute(startDateObj)}</Bold>
          </span>
        </PredictInfo>
      </Left>
      <Right>
        <RightContainer>
          <NextDate>{dateFormatter.getFromMonthToDay(nextDate)}</NextDate>
          <ButtonContainer>
            <PredictButton type="button" css={IncreaseStyle}>
              <Triangle />
              상승
            </PredictButton>
            <PredictButton type="button" css={DecreaseStyle}>
              <Triangle negative />
              하락
            </PredictButton>
          </ButtonContainer>
          <Flex>
            <Coin>
              <CoinIcon />
              {dateFormatter.getDateDiff(prevDate, nextDate) *
                COIN_REQUIREMENTS.STOCK_FLUCTUATION}
            </Coin>
            <Button css={[Medium, SubmitButtonStyle]}>예측하기</Button>
          </Flex>
        </RightContainer>
      </Right>
    </Container>
  );
}

export default StockFluctuationItem;
