import { Route, Routes } from 'react-router-dom';
import MyPageLayout from '@components/common/Layout/MyPage';
import MyPage from '@components/MyPage';
import Preparation from '@components/common/Fallback/Error/Preparation';
import NotFound from '@components/common/Fallback/Error/NotFound';

function MyPagePage() {
  return (
    <Routes>
      <Route element={<MyPageLayout />}>
        {['all', 'stock_fluctuation', 'stock_price'].map((path) => (
          <Route key={path} path={path} element={<MyPage />} />
        ))}
        {['lotto'].map((path) => (
          <Route key={path} path={path} element={<Preparation />} />
        ))}
        <Route path="*" element={<NotFound fullScreen={false} />} />
      </Route>
    </Routes>
  );
}

export default MyPagePage;
