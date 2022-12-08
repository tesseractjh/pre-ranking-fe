import styled from 'styled-components';
import PredictForm from './PredictForm';
import PredictInfo from './PredictInfo';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
      prediction_value: string;
    };
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch')}
`;

function StockFluctuationItem({ prediction }: Props) {
  return (
    <Container>
      <PredictInfo prediction={prediction} />
      <PredictForm prediction={prediction} />
    </Container>
  );
}

export default StockFluctuationItem;
