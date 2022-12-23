import { Route, Routes } from 'react-router-dom';
import NotFound from '@components/common/Fallback/Error/NotFound';
import Ranking from '@components/Ranking';
import Preparation from '@components/common/Fallback/Error/Preparation';

function RankingPage() {
  return (
    <Routes>
      {['all', 'stock_fluctuation', 'stock_price', 'lotto'].map((path) => (
        <Route key={path} path={path} element={<Ranking />} />
      ))}
      <Route path="detail/*" element={<Preparation />} />
      <Route path="*" element={<NotFound fullScreen={false} />} />
    </Routes>
  );
}

export default RankingPage;
