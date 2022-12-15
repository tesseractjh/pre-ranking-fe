import MyInfoContainer from '@components/common/Layout/MyPage/MyInfoContainer';
import Table from '@components/common/Table';
import { ReactComponent as HistoryIcon } from '@assets/icons/history.svg';
import useRecord from '../hooks/useRecord';

function Record() {
  const tableProps = useRecord();

  return (
    <MyInfoContainer icon={HistoryIcon} title="예측 기록">
      <Table {...tableProps} rowCount={20} unit={5} />
    </MyInfoContainer>
  );
}

export default Record;
