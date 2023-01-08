import StockDetail from '../Detail/StockDetail';

const getTypedModelAndDetail = <T extends Model.PredictionBase>(
  model: T,
  category: string
) => {
  switch (category) {
    case 'stock_fluctuation':
      return {
        typed: model as T & Model.StockFluctuation,
        Detail: StockDetail
      };
    case 'stock_price':
      return {
        typed: model as T & Model.StockPrice,
        Detail: StockDetail
      };
    default:
      return { typed: model };
  }
};

export default getTypedModelAndDetail;
