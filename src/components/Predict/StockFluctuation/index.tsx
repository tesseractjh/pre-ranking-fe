import withErrorBoundary from '@components/hoc/withErrorBoundary';
import PredictFilter from '../Filter';
import Checkbox from '../Filter/Checkbox';
import PredictComment from '../PredictComment';
import StockFluctuationList from './StockFluctuationList';

function StockFluctuation() {
  return (
    <>
      <PredictComment>
        - 최소 3일 ~ 최대 4주 후의 주식의 종가가 현재 종가와 비교했을 때의
        상승/하락 여부를 예측합니다.
        <br />- 상승 또는 하락 둘 중 하나를 선택하여야 하며, 하락은 등락률 0%인
        경우를 포함합니다.
        <br />
        - 종가 등락 예측은 오후 12시 ~ 오전 8시까지 정각에 1회씩 무작위 주식을
        대상으로 시작됩니다.
        <br />- 현재 종가는 실시간 가격이 아니며, 예측이 시작된 시각에
        한국거래소에서 제공하는 API의 최신 종가를 나타냅니다.
      </PredictComment>
      <PredictFilter>
        <Checkbox
          id="unsubmitted"
          category="stock_fluctuation"
          content="아직 참여하지 않은 예측"
        />
      </PredictFilter>
      <StockFluctuationList />
    </>
  );
}

export default withErrorBoundary(StockFluctuation);
