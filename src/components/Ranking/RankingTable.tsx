import Table from '@components/common/Table';
import useRanking from './hooks/useRanking';

function RankingTable() {
  const tableProps = useRanking();
  return <Table {...tableProps} rowCount={20} unit={5} />;
}

export default RankingTable;
