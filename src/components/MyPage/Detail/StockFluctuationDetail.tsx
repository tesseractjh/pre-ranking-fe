import styled from 'styled-components';
import color from '@styles/theme/color';
import pxToRem from '@utils/pxToRem';
import dateFormatter from '@utils/dateFormatter';

interface Props {
  record: Model.PredictionBase & Model.StockFluctuation;
  table?: boolean;
}

const TableContainer = styled.td`
  padding: ${pxToRem(16, 0)};
  font-size: ${pxToRem(16)};
  text-align: center;

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(14)};
  `)}
`;

const Container = styled.div`
  font-size: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(14)};
  `)}
`;

const Flex = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('center', 'center', pxToRem(20))}

  ${({ theme }) =>
    theme.media.tablet(`
      ${theme.mixin.inlineFlexColumn('flex-start', 'stretch', pxToRem(10))}
  `)}
`;

const Prev = styled.span``;

const LineBreak = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('center', 'center', pxToRem(20))}

  ${({ theme }) =>
    theme.media.tablet(`
      justify-content: flex-end;
      gap: ${pxToRem(10)};
  `)}
`;

const Bold = styled.strong<{ $color?: keyof typeof color }>`
  font-weight: 700;
  color: ${({ $color, theme }) => theme.color[$color ?? 'BLACK']};
`;

const Fallback = styled.p`
  font-size: ${pxToRem(16)};
`;

function StockFluctuationDetail({ record, table }: Props) {
  const {
    last_date: lastDate,
    result_date: resultDate,
    stock_name: stockName,
    last_price: lastPrice,
    result_price: resultPrice
  } = record;

  if (!resultPrice) {
    return <Fallback>아직 결과가 나오지 않았습니다.</Fallback>;
  }

  const content = (
    <Flex>
      <Prev>
        {dateFormatter.getDateFromMonthToDay(lastDate)}{' '}
        <Bold>{stockName} </Bold>
        종가 <Bold>{lastPrice.toLocaleString('ko-kr')}</Bold>원
      </Prev>

      <LineBreak>
        →
        <span>
          {dateFormatter.getDateFromMonthToDay(resultDate)} 종가{' '}
          <Bold $color={resultPrice > lastPrice ? 'RED_600' : 'BLUE_600'}>
            {resultPrice.toLocaleString('ko-kr')}
          </Bold>
          원
        </span>
      </LineBreak>
    </Flex>
  );

  if (table) {
    return <TableContainer colSpan={4}>{content}</TableContainer>;
  }

  return <Container>{content}</Container>;
}

export default StockFluctuationDetail;
