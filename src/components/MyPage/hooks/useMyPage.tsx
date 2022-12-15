import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePredictionRecord from '@hooks/queries/usePredictionRecord';
import usePredictionCount from '@hooks/queries/usePredictionCount';
import MYPAGE_COLUMNS from '../constants/column';
import normalizeData from '../utils/normalizeData';

function useMyPage() {
  const [page, setPage] = useState(0);
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];
  const { data: countData } = usePredictionCount();
  const { data } = usePredictionRecord(category);

  return {
    category,
    columns: MYPAGE_COLUMNS,
    count: countData?.count.total_count ?? 0,
    data: normalizeData(data?.pages[page].predictions ?? [])
  };
}

export default useMyPage;
