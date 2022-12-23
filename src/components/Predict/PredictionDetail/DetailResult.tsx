import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import getTypedModelAndDetail from '@components/MyPage/utils/getTypedModelAndDetail';
import DetailLayout from './DetailLayout';

interface Props {
  prediction: Model.PredictionDetail;
}

function DetailResult({ prediction }: Props) {
  const { typed, Detail } = getTypedModelAndDetail(
    prediction,
    prediction.prediction_category.split('_').slice(1).join('_')
  );

  return (
    <DetailLayout icon={ScoreIcon} title="결과">
      {Detail && <Detail record={typed} />}
    </DetailLayout>
  );
}

export default DetailResult;
