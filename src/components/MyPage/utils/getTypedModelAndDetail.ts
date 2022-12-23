import StockFluctuationDetail from '../Detail/StockFluctuationDetail';

const getTypedModelAndDetail = <T extends Model.PredictionBase>(
  model: T,
  category: string
) => {
  switch (category) {
    case 'stock_fluctuation':
      return {
        typed: model as T & Model.StockFluctuation,
        Detail: StockFluctuationDetail
      };
    default:
      return { typed: model };
  }
};

export default getTypedModelAndDetail;
