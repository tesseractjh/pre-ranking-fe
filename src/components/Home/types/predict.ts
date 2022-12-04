export type SVGIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type PredictStatus = 'active' | 'inactive' | 'finished';

export type Predict = {
  icon: SVGIcon;
  content: string;
  link: string;
  status: PredictStatus;
};
