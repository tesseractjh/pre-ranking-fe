import React from 'react';
import styled from 'styled-components';
import PredictForm from './PredictForm';
import PredictInfo from './PredictInfo';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
      prediction_value: string;
    };
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
  return (
    <Container>
      <PredictInfo prediction={prediction} endDate={endDate} />
      <PredictForm prediction={prediction} endDate={endDate} />
    </Container>
  );
}

export default React.memo(StockFluctuationItem);
