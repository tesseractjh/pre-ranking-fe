import { Route, Routes } from 'react-router-dom';
import StockFluctuation from '@components/Predict/StockFluctuation';
import PredictAll from '@components/Predict/PredictAll';
import NotFound from '@components/common/Fallback/Error/NotFound';

function PredictPage() {
  return (
    <Routes>
      <Route path="all" element={<PredictAll />} />
      <Route path="stock_fluctuation" element={<StockFluctuation />} />
      <Route path="stock_price" element={<div>종가 예측 페이지</div>} />
      <Route path="lotto" element={<div>로또 당첨 번호 예측 페이지</div>} />
      <Route path="*" element={<NotFound fullScreen={false} />} />
    </Routes>
  );
}

export default PredictPage;
