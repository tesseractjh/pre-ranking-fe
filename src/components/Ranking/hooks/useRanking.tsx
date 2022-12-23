import usePredictionRanking from '@hooks/queries/usePredictionRanking';
import pxToRem from '@utils/pxToRem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { css } from 'styled-components';
import RANKING_COLUMNS from '../constants/column';

const AccuracyColumnStyle = css`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(6))}
  flex-wrap: wrap;
`;

function useRanking() {
  const [page, setPage] = useState(1);
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];

  const { data } = usePredictionRanking({ category, page });

  useEffect(() => {
    setPage(1);
  }, [pathname]);

  return {
    category,
    page,
    setPage,
    columns: RANKING_COLUMNS,
    totalCount: data?.total_user_count ?? 0,
    data:
      data?.ranks.map(
        (
          {
            user_name: userName,
            total_count: totalCount,
            right_count: rightCount,
            score
          },
          index
        ) => ({
          id: `${userName}-${index}`,
          datas: [
            { value: (page - 1) * 20 + index + 1 },
            { value: userName },
            { value: score.toLocaleString('ko-kr') },
            {
              value: (
                <>
                  <span>{((rightCount * 100) / totalCount).toFixed(2)}%</span>
                  <span>
                    ({rightCount} / {totalCount})
                  </span>
                </>
              ),
              css: AccuracyColumnStyle
            }
          ]
        })
      ) ?? []
  };
}

export default useRanking;
