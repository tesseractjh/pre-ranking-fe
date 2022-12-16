import { Route, Routes } from 'react-router-dom';
import NotFound from '@components/common/Fallback/Error/NotFound';

function RankingPage() {
  return (
    <Routes>
      <Route path="all" element={<div>(전체) 랭킹 페이지</div>} />
      <Route
        path="stock_fluctuation"
        element={<div>주가 등락 랭킹 페이지</div>}
      />
      <Route path="stock_price" element={<div>종가 랭킹 페이지</div>} />
      <Route path="lotto" element={<div>로또 당첨 번호 랭킹 페이지</div>} />
      <Route path="*" element={<NotFound fullScreen={false} />} />
    </Routes>
  );
}

export default RankingPage;
