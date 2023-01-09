import { PREDICTION_CATEGORIES } from '@constants/predictionList';
import dateFormatter from '@utils/dateFormatter';
import PredictWrapper from '../PredictWrapper';
import StockFluctuationItem from '../Stock/StockFluctuation/StockFluctuationItem';
import StockPriceItem from '../Stock/StockPrice/StockPriceItem';

interface Props {
  prediction: Model.PredictionDetail;
}

const getItem = (category: string) => {
  switch (category) {
    case 'stock_fluctuation':
      return StockFluctuationItem;
    case 'stock_price':
      return StockPriceItem;
    default:
      return null;
  }
};

function PredictionItem({ prediction }: Props) {
  const category = prediction.prediction_category.split('_').slice(1).join('_');
  const { icon, content } =
    PREDICTION_CATEGORIES.find(({ link }) => link === category) ?? {};
  const endDate = dateFormatter.getEndDate(prediction.created_at);
  const Item = getItem(category);

  return (
    <PredictWrapper
      key={prediction.prediction_id}
      icon={icon}
      category={content}
      predictionValue={prediction.prediction_value}
      endDate={endDate}
      all
    >
      {Item && <Item prediction={prediction} endDate={endDate} />}
    </PredictWrapper>
  );
}

export default PredictionItem;
