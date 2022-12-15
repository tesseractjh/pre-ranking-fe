import useMyPage from './hooks/useMyPage';
import Prediction from './Prediction';

function MyPage() {
  const { category, columns, count, data } = useMyPage();

  return (
    <Prediction
      category={category}
      columns={columns}
      count={count}
      data={data}
    />
  );
}

export default MyPage;
