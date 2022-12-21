import CHART_DATA from '@components/Predict/constants/chart';

function useDetailResult(prediction: Model.PredictionDetail) {
  const { prediction_category: category, user_prediction_data: data } =
    prediction;

  return (
    data?.map(({ prediction_value: value, count }) =>
      CHART_DATA[category.split('_').slice(1).join('_')](value, count)
    ) ?? []
  );
}

export default useDetailResult;
