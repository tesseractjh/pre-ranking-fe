import { Route, Routes } from 'react-router-dom';

function PredictPage() {
  return (
    <Routes>
      <Route path="all" element={<div>(전체)예측 페이지</div>} />
      <Route
        path="stock_fluctuation"
        element={<div>주가 등락 예측 페이지</div>}
      />
      <Route path="stock_price" element={<div>종가 예측 페이지</div>} />
      <Route path="lotto" element={<div>로또 당첨 번호 예측 페이지</div>} />
    </Routes>
  );
}

export default PredictPage;
