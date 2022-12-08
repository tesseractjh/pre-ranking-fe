import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import dateFormatter from '@utils/dateFormatter';
import { Triangle } from '@components/common/Triangle';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
      prediction_value: string;
    };
}

const Container = styled.div`
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

const PredictDetail = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('center', 'flex-start', pxToRem(6))}
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.GRAY_800};
`;

function PredictInfo({ prediction }: Props) {
  const {
    created_at: startDate,
    last_date: prevDate,
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
      <PredictDetail>
        <span>
          예측 참여 | <Bold>{participantCount}명</Bold>
        </span>
        <span>
          예측 마감 |{' '}
          <Bold>{dateFormatter.getFromMonthToMinute(startDateObj)}</Bold>
        </span>
      </PredictDetail>
    </Container>
  );
}

export default PredictInfo;
