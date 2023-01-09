import HorizontalBarChart from '@components/common/Chart/HorizontalBarChart';
import { ReactComponent as ChartIcon } from '@assets/icons/chart.svg';
import useDetailStatus from './hooks/useDetailStatus';
import DetailLayout from './DetailLayout';

interface Props {
  prediction: Model.PredictionDetail;
}

function DetailStatus({ prediction }: Props) {
  const data = useDetailStatus(prediction);

  return data.length ? (
    <DetailLayout icon={ChartIcon} title="유저 예측">
      <HorizontalBarChart data={data} />
    </DetailLayout>
  ) : null;
}

export default DetailStatus;
