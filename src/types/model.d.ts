declare namespace Model {
  interface Notification {
    notification_id: number;
    user_id: number;
    notification_title: string;
    notification_text: string;
    notification_link: string;
    created_at: string;
  }

  interface User {
    user_name: string;
    exp: number;
    coin: number;
  }

  interface UserRank {
    user_id: number;
    score: number;
    ranking: number;
    total_count: number;
  }

  interface Info {
    last_date: string;
  }

  interface PredictionBase {
    result_date: string;
  }

  interface PredictionCount {
    total_count: number;
    right_count: number;
  }

  interface Rank extends PredictionCount {
    user_name: string;
    score: number;
    ranking: number;
  }

  interface PredictionRecord extends PredictionBase {
    user_id: number;
    prediction_id: number;
    category: string;
    prediction_value: string;
    prediction_result: number | null;
    score: number | null;
    coin: number | null;
  }

  interface Prediction extends PredictionBase {
    prediction_id: number;
    prediction_category: string;
    prediction_info_id: number;
    result_value: string;
    created_at: string;
  }

  interface PredictionDetail extends Prediction {
    prediction_created_at: string;
    participant_count: number;
    prediction_value: string | null;
    user_prediction_data:
      | {
          prediction_value: string;
          count: number;
        }[]
      | null;
  }

  interface StockFluctuation extends Info {
    info_id: number;
    stock_name: string;
    last_price: number;
    result_price: number;
    code: string;
    short_code: string;
    market_category: string;
    vs: number;
    fluctuation_rate: number;
    created_at: string;
  }

  type StockPrice = StockFluctuation;
}
