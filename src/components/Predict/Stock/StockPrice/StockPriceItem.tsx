import React from 'react';
import styled from 'styled-components';
import StockPredictionForm from '../StockPredictionForm';
import StockPredictionInfo from '../StockPredictionInfo';
import StockPriceForm from './StockPriceForm';

interface Props {
  prediction: Model.PredictionDetail;
  endDate: number;
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch')}

  ${({ theme }) =>
    theme.media.laptop(`
    flex-direction: column;
  `)}
`;

function StockPriceItem({ prediction, endDate }: Props) {
  const typedPrediction = prediction as Model.PredictionDetail &
    Model.StockPrice;

  return (
    <Container>
      <StockPredictionInfo prediction={typedPrediction} endDate={endDate} />
      <StockPredictionForm prediction={typedPrediction} endDate={endDate}>
        <StockPriceForm price={typedPrediction.last_price} />
      </StockPredictionForm>
    </Container>
  );
}

export default React.memo(StockPriceItem);
