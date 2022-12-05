import PredictLayout from '@components/common/Layout/Predict';
import { Route, Routes } from 'react-router-dom';

function PredictPage() {
  return (
    <Routes>
      <Route element={<PredictLayout />}>
        <Route index element={<div>(전체)예측 페이지</div>} />
        <Route
          path="stock_fluctuation"
          element={<div>주가 등락 예측 페이지</div>}
        />
        <Route path="stock_price" element={<div>종가 예측 페이지</div>} />
        <Route path="lotto" element={<div>로또 당첨 번호 예측 페이지</div>} />
      </Route>
    </Routes>
  );
}

export default PredictPage;
