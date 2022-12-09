import useUserInfo from '@hooks/queries/useUserInfo';
import { useState } from 'react';

function useStockFluctuationItem(predictedValue: string | null) {
  const [inputValue, setInputValue] = useState(predictedValue ?? '');
  const { data } = useUserInfo(false);

  const handlePredict = (value: string) => () => {
    setInputValue(value);
  };

  return { coin: data?.user.coin, inputValue, handlePredict };
}

export default useStockFluctuationItem;
