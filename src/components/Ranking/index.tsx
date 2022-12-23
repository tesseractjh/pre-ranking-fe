import withErrorBoundary from '@components/hoc/withErrorBoundary';
import RankingTable from './RankingTable';

function Ranking() {
  return (
    <>
      <RankingTable />
    </>
  );
}

export default withErrorBoundary(Ranking);
