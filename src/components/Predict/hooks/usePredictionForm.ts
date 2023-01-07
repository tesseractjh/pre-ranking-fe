import dateFormatter from '@utils/dateFormatter';
import COIN_REQUIREMENTS from '../constants/requirements';

interface Props {
  prediction: Model.PredictionDetail & Model.Info;
  endDate: number;
  coin: number | undefined;
  inputValue: string;
  category: string;
}

function usePredictionForm({
  prediction,
  endDate,
  coin,
  inputValue,
  category
}: Props) {
  const {
    prediction_id: id,
    last_date: prevDate,
    result_date: nextDate,
    prediction_value: predictionValue
  } = prediction;

  const requiredCoin =
    dateFormatter.getDateDiff(prevDate, nextDate) * COIN_REQUIREMENTS[category];
  const lackOfCoin = typeof coin === 'number' && coin < requiredCoin;
  const hasPrediction = !!predictionValue;
  const isOverdue = Date.now() > endDate;
  const inputDisabled = lackOfCoin || hasPrediction || isOverdue;
  const submitDisabled = !inputValue || inputDisabled;

  return {
    id,
    prevDate,
    nextDate,
    predictionValue,
    requiredCoin,
    lackOfCoin,
    hasPrediction,
    isOverdue,
    inputDisabled,
    submitDisabled
  };
}

export default usePredictionForm;
