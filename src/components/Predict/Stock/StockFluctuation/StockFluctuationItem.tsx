import React from 'react';
import styled from 'styled-components';
import StockFluctuationForm from './StockFluctuationForm';
import StockPredictionInfo from '../StockPredictionInfo';
import StockPredictionForm from '../StockPredictionForm';

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

function StockFluctuationItem({ prediction, endDate }: Props) {
  const typedPrediction = prediction as Model.PredictionDetail &
    Model.StockFluctuation;

  return (
    <Container>
      <StockPredictionInfo prediction={typedPrediction} endDate={endDate} />
      <StockPredictionForm prediction={typedPrediction} endDate={endDate}>
        <StockFluctuationForm />
      </StockPredictionForm>
    </Container>
  );
}

export default React.memo(StockFluctuationItem);
