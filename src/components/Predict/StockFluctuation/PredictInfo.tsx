import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import dateFormatter from '@utils/dateFormatter';
import { Triangle } from '@components/common/Triangle';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
      prediction_value: string | null;
    };
  endDate: number;
}

const Container = styled.div`
  flex: 1;
  ${({ theme }) =>
    theme.mixin.flexColumn('space-between', 'stretch', pxToRem(10))}
  padding: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.laptop(`
      min-height: ${pxToRem(200)};
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
      min-height: ${pxToRem(160)};
  `)}
`;

const PrevDate = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(14)};
  `)}
`;

const StockInfoTop = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'flex-end', pxToRem(10))}
  flex-wrap: wrap;
  font-size: ${pxToRem(14)};

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(12)};
  `)}
`;

const StockName = styled.strong`
  font-weight: 700;
  font-size: ${pxToRem(28)};

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(20)};
  `)}
`;

const MarketCategory = styled.span`
  padding: ${pxToRem(1, 2)};
  border: 1px solid ${({ theme }) => theme.color.GRAY_600};
  font-weight: 600;
  font-size: ${pxToRem(10)};
`;

const StockInfoBottom = styled.div<{ vs: number }>`
  ${({ theme }) => theme.mixin.flex('flex-start', 'flex-end', pxToRem(16))}
  flex-wrap: wrap;
  margin-top: ${pxToRem(10)};
  font-size: ${pxToRem(14)};

  color: ${({ vs, theme }) => {
    if (!vs) {
      return theme.color.BLACK;
    }
    return theme.color[vs > 0 ? 'RED_600' : 'BLUE_600'];
  }};

  ${({ theme }) =>
    theme.media.tablet(`
      gap: ${pxToRem(12)};
      font-size: ${pxToRem(12)};
  `)}
`;

const StockPrice = styled.strong`
  font-weight: 900;
  font-size: ${pxToRem(32)};
  letter-spacing: -2px;

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(28)};
      letter-spacing: -1px;
  `)}
`;

const Bold = styled.span`
  font-weight: 700;
`;

const PredictDetail = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('center', 'flex-start', pxToRem(6))}
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.GRAY_800};

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(12)};
  `)}
`;

function PredictInfo({ prediction, endDate }: Props) {
  const {
    last_date: prevDate,
    stock_name: stockName,
    short_code: code,
    market_category: market,
    last_price: price,
    vs,
    fluctuation_rate: rate,
    participant_count: participantCount
  } = prediction;

  return (
    <Container className="info-predict">
      <PrevDate>{dateFormatter.getDateFromMonthToDay(prevDate)}</PrevDate>
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
          <Bold>
            {dateFormatter.getDateFromMonthToMinute(new Date(endDate))}
          </Bold>
        </span>
      </PredictDetail>
    </Container>
  );
}

export default React.memo(PredictInfo);
