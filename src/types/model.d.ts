declare namespace Model {
  interface Notification {
    notification_id: number;
    user_id: number;
    notification_text: string;
    notification_link: string;
    created_at: string;
  }

  interface User {
    user_name: string;
    coin: number;
  }
}
