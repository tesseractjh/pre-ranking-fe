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

  interface Rank {
    user_id: number;
    score: number;
    ranking: number;
    total_count: number;
  }

  interface PredictionCount {
    total_count: number;
    right_count: number;
  }

  interface Prediction {
    prediction_id: number;
    prediction_category: string;
    prediction_info_id: number;
    result_value: string;
    result_date: string;
    created_at: string;
  }

  interface StockFluctuation {
    info_id: number;
    stock_name: string;
    last_price: number;
    last_date: string;
    code: string;
    short_code: string;
    market_category: string;
    vs: number;
    fluctuation_rate: number;
    created_at: string;
  }
}
