import { useParams } from 'react-router-dom';
import usePredictionDetail from '@hooks/queries/usePredictionDetail';
import dateFormatter from '@utils/dateFormatter';

function usePredictionInfo() {
  const { id } = useParams();
  const { data } = usePredictionDetail(Number(id));

  if (!data?.prediction) {
    return null;
  }

  const { prediction } = data;
  const endDate = dateFormatter.getEndDate(prediction.prediction_created_at);

  return {
    prediction,
    endDate
  };
}

export default usePredictionInfo;
