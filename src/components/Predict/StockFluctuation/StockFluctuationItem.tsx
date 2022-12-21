import React from 'react';
import styled from 'styled-components';
import PredictForm from './PredictForm';
import PredictInfo from './PredictInfo';

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
      <PredictInfo prediction={typedPrediction} endDate={endDate} />
      <PredictForm prediction={typedPrediction} endDate={endDate} />
    </Container>
  );
}

export default React.memo(StockFluctuationItem);
