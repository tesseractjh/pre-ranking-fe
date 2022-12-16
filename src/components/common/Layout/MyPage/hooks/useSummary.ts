import LEVEL from '@constants/level';
import useMyRank from '@hooks/queries/useMyRank';
import usePredictionCount from '@hooks/queries/usePredictionCount';
import useUserInfo from '@hooks/queries/useUserInfo';

function useSummary() {
  const { data: userInfoData } = useUserInfo(true);
  const { data: myRankData } = useMyRank();
  const { data: predictionCountData } = usePredictionCount({ category: 'all' });

  const nextLevel = LEVEL.findIndex(
    (exp) => userInfoData?.user && userInfoData.user?.exp < exp
  );
  const level = nextLevel === -1 ? 50 : nextLevel;
  const prevRequiredExp = LEVEL[level - 1] ?? 0;
  const requiredExp = LEVEL[level];
  const exp = userInfoData?.user?.exp ?? 0;
  const totalCount = predictionCountData?.count.total_count ?? 0;
  const rightCount = predictionCountData?.count.right_count ?? 0;

  return {
    userName: userInfoData?.user?.user_name ?? '',
    exp,
    level,
    requiredExp,
    ratio: (exp - prevRequiredExp) / (requiredExp - prevRequiredExp),
    totalScore: myRankData?.rank?.score ?? 0,
    rank: myRankData?.rank?.ranking ?? 0,
    totalUserCount: myRankData?.rank?.total_count ?? 0,
    totalCount,
    rightCount,
    rightRatio: totalCount ? ((rightCount * 100) / totalCount).toFixed(2) : 0,
    coin: userInfoData?.user?.coin ?? 0
  };
}

export default useSummary;
