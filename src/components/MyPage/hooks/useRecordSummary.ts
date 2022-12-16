import useMyRank from '@hooks/queries/useMyRank';
import usePredictionCount from '@hooks/queries/usePredictionCount';

function useRecordSummary(category: string) {
  const { data: myRankData } = useMyRank(category);
  const { data: predictionCountData } = usePredictionCount({ category });

  return {
    totalScore: myRankData?.rank?.score ?? 0,
    rank: myRankData?.rank?.ranking ?? 0,
    totalUserCount: myRankData?.rank?.total_count ?? 0,
    totalCount: predictionCountData?.count.total_count ?? 0,
    rightCount: predictionCountData?.count.right_count ?? 0
  };
}

export default useRecordSummary;
