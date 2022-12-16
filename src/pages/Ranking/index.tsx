import { Route, Routes } from 'react-router-dom';
import NotFound from '@components/common/Fallback/Error/NotFound';
import Preparation from '@components/common/Fallback/Error/Preparation';

function RankingPage() {
  return (
    <Routes>
      <Route path="all" element={<Preparation />} />
      <Route path="stock_fluctuation" element={<Preparation />} />
      <Route path="stock_price" element={<Preparation />} />
      <Route path="lotto" element={<Preparation />} />
      <Route path="detail/*" element={<Preparation />} />
      <Route path="*" element={<NotFound fullScreen={false} />} />
    </Routes>
  );
}

export default RankingPage;
