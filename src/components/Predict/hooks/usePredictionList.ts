import { useCallback } from 'react';
import usePrediction from '@hooks/queries/usePrediction';
import { useRecoilValue } from 'recoil';
import { checkboxFilterState } from '@recoil/filter';

function usePredictionList(category: string) {
  const unsubmitted = useRecoilValue(
    checkboxFilterState({ id: 'unsubmitted', category })
  );

  const { data, fetchNextPage } = usePrediction({ category, unsubmitted });

  const handleIntersect = useCallback(async () => {
    const result = await fetchNextPage();
    return result;
  }, []);

  return {
    data: data?.pages.flatMap(({ predictions }) => predictions) ?? [],
    handleIntersect
  };
}

export default usePredictionList;
