import usePrediction from '@hooks/queries/usePrediction';

function usePredictAll() {
  const { data } = usePrediction({});

  return data?.predictions ?? [];
}

export default usePredictAll;
