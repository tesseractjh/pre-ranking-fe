import useUserInfo from '@hooks/queries/useUserInfo';
import { useState } from 'react';

function useStockFluctuationItem(predictedValue: string | null) {
  const [predictionValue, setPredictionValue] = useState(predictedValue ?? '');
  const { data } = useUserInfo(false);

  const handlePredict = (value: string) => () => {
    setPredictionValue(value);
  };

  return { coin: data?.user.coin, predictionValue, handlePredict };
}

export default useStockFluctuationItem;
