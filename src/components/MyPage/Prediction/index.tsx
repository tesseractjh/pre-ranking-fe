import MyInfoContainer from '@components/common/Layout/MyPage/MyInfoContainer';
import Table from '@components/common/Table';
import type {
  TableColumn,
  TableData
} from '@components/common/Table/types/table';
import { ReactComponent as HistoryIcon } from '@assets/icons/history.svg';

interface Props {
  category: string;
  columns: TableColumn[];
  count: number;
  data: TableData[];
}

function Prediction({ category, columns, count, data }: Props) {
  return (
    <MyInfoContainer icon={HistoryIcon} title="예측 기록">
      <Table columns={columns} count={count} data={data} />
    </MyInfoContainer>
  );
}

export default Prediction;
