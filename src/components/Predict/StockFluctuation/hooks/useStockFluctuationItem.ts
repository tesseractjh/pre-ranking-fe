import useCreateUserPrediction from '@hooks/mutations/useCreateUserPrediction';
import useUserInfo from '@hooks/queries/useUserInfo';
import { useEffect, useState } from 'react';

interface Props {
  predictionId: number;
  predictionValue: string | null;
  category?: string;
}

function useStockFluctuationItem({
  predictionId,
  predictionValue,
  category
}: Props) {
  const [inputValue, setInputValue] = useState(predictionValue ?? '');
  const { data } = useUserInfo(false);
  const { mutateAsync } = useCreateUserPrediction(category);

  useEffect(() => {
    if (predictionValue) {
      setInputValue(predictionValue);
    }
  }, [predictionValue]);

  const handlePredict = (value: string) => () => {
    setInputValue(value);
  };

  const handleSubmit = async () => {
    await mutateAsync({
      body: { category, predictionId, predictionValue: inputValue }
    });
  };

  return { coin: data?.user.coin, inputValue, handlePredict, handleSubmit };
}

export default useStockFluctuationItem;
