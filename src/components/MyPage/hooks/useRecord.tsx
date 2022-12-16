import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePredictionRecord from '@hooks/queries/usePredictionRecord';
import usePredictionCount from '@hooks/queries/usePredictionCount';
import MYPAGE_COLUMNS from '../constants/column';
import normalizeData from '../utils/normalizeData';

function useRecord() {
  const [page, setPage] = useState(1);
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];

  const { data: countData } = usePredictionCount({
    category,
    containAll: true
  });
  const { data } = usePredictionRecord({ category, page });

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  return {
    category,
    page,
    setPage,
    columns: MYPAGE_COLUMNS,
    totalCount: countData?.count.total_count ?? 0,
    data: normalizeData(data?.predictions ?? [])
  };
}

export default useRecord;
