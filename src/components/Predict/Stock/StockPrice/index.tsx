import withErrorBoundary from '@components/hoc/withErrorBoundary';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import PredictFilter from '../../Filter';
import Checkbox from '../../Filter/Checkbox';
import PredictComment from '../../PredictComment';
import StockPriceList from './StockPriceList';

function StockPrice() {
  return (
    <>
      <PredictComment>
        - 최소 3일 ~ 최대 4주 후의 주식의 종가를 예측합니다.
        <br />- 실제 종가에 변동량 ±10% 까지 적중한 것으로 간주합니다.
        <br />
        &nbsp;&nbsp; 예를 들어 10,000원에서 12,000원이 되었다면 11,900원부터
        12,100원까지 적중한 것으로 인정합니다.
        <br />
        - 종가 예측은 오후 12시 ~ 오전 8시까지 정각에 1회씩 무작위 주식을
        대상으로 시작됩니다.
        <br />- 현재 종가는 실시간 가격이 아니며, 예측이 시작된 시각에
        한국거래소에서 제공하는 API의 최신 종가를 나타냅니다.
        <br />- 예측 보상: (경과 일 수) X 75
        <CoinIcon className="svg-coin" />, +20
        <ScoreIcon className="svg-score" /> (적중 실패시 -1
        <ScoreIcon className="svg-score" />
        ), 정확하게 맞히면 (경과 일 수) X 200
        <CoinIcon className="svg-coin" />, +100
        <ScoreIcon className="svg-score" />
      </PredictComment>
      <PredictFilter>
        <Checkbox
          id="unsubmitted"
          category="stock_price"
          content="아직 참여하지 않은 예측"
        />
      </PredictFilter>
      <StockPriceList />
    </>
  );
}

export default withErrorBoundary(StockPrice);
