export type PredictStatus = 'active' | 'inactive' | 'finished';

export type Predict = {
  icon: SVGIcon;
  content: string;
  link: string;
  status: PredictStatus;
};
