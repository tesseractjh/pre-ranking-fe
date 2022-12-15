import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import color from '@styles/theme/color';
import dateFormatter from '@utils/dateFormatter';
import getResult from '../getResult';

interface Props {
  lastDate: string;
  stockName: string;
  lastPrice: number;
  resultDate: string;
  resultPrice: number;
}

const Container = styled.td`
  padding: ${pxToRem(16, 0)};
  font-size: ${pxToRem(16)};
  text-align: center;
`;

const Flex = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('center', 'center', pxToRem(20))}
`;

const Bold = styled.strong<{ $color?: keyof typeof color }>`
  font-weight: 700;
  color: ${({ $color, theme }) => theme.color[$color ?? 'BLACK']};
`;

const getRewardStyle = (score: number | null, coin: number | null) => css`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}

  ${!coin &&
  `
    & > .coin {
      display: none;
    }
  `}

  ${({ theme }) =>
    score &&
    score < 0 &&
    `
      & > .score {
        color: ${theme.color.RED_600};
      }
    `}

  & svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
  }

  & > .score > svg {
    fill: ${({ theme }) => theme.color.PURPLE_600};
  }

  & > .coin > svg {
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }
`;

function StockFluctuationDetail({
  lastDate,
  stockName,
  lastPrice,
  resultDate,
  resultPrice
}: Props) {
  return (
    <Container colSpan={4}>
      <Flex>
        <span>
          {dateFormatter.getDateFromMonthToDay(lastDate)}{' '}
          <Bold>{stockName} </Bold>
          종가 <Bold>{lastPrice.toLocaleString('ko-kr')}</Bold>원
        </span>
        →
        <span>
          {dateFormatter.getDateFromMonthToDay(resultDate)} 종가{' '}
          <Bold $color={resultPrice > lastPrice ? 'RED_600' : 'BLUE_600'}>
            {resultPrice.toLocaleString('ko-kr')}
          </Bold>
          원
        </span>
      </Flex>
    </Container>
  );
}

const normalizeStockFluctuation = (record: Model.PredictionRecord) => {
  const {
    prediction_id: predictionId,
    prediction_result: result,
    last_date: lastDate,
    result_date: resultDate,
    stock_name: stockName,
    last_price: lastPrice,
    result_price: resultPrice,
    score,
    coin
  } = record as Model.PredictionRecord & Model.StockFluctuation;

  return {
    id: predictionId,
    datas: [
      {
        value: (
          <Link to={`/predict/detail/${predictionId}`}>{predictionId}</Link>
        )
      },
      {
        value: (
          <Link to={`/predict/detail/${predictionId}`}>주식 종가 등락</Link>
        )
      },
      { value: getResult(result) },
      {
        value:
          result !== null
            ? [
                <span key="score" className="score">
                  <ScoreIcon />
                  {Number(score).toLocaleString('ko-kr')}
                </span>,
                <span key="coin" className="coin">
                  <CoinIcon />
                  {Number(coin).toLocaleString('ko-kr')}
                </span>
              ]
            : '-',
        css: getRewardStyle(score, coin)
      }
    ],
    detail:
      result !== null ? (
        <StockFluctuationDetail
          stockName={stockName}
          lastDate={lastDate}
          lastPrice={lastPrice}
          resultDate={resultDate}
          resultPrice={resultPrice}
        />
      ) : null
  };
};

export default normalizeStockFluctuation;
