import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCreateUserPrediction from '@hooks/mutations/useCreateUserPrediction';
import useUserInfo from '@hooks/queries/useUserInfo';

interface Props {
  predictionId: number;
  predictionValue: string | null;
  category?: string;
}

function usePredictionItem({ predictionId, predictionValue, category }: Props) {
  const [inputValue, setInputValue] = useState(predictionValue ?? '');
  const { data } = useUserInfo(false);
  const { mutateAsync } = useCreateUserPrediction(category);
  const { pathname } = useLocation();
  const isDetail = pathname.split('/')[2] === 'detail';

  useEffect(() => {
    if (predictionValue) {
      setInputValue(predictionValue);
    }
  }, [predictionValue]);

  const handlePredict = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = async () => {
    await mutateAsync({
      body: { category, predictionId, predictionValue: inputValue }
    });
  };

  return {
    coin: data?.user.coin,
    inputValue,
    isDetail,
    handlePredict,
    handleSubmit
  };
}

export default usePredictionItem;
