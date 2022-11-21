import { Routes, Route } from 'react-router-dom';
import Layout from '@components/common/Layout';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div>메인 페이지</div>} />
        <Route path="predict" element={<div>개별 예측 페이지</div>} />
        <Route path="profile" element={<div>프로필 페이지</div>} />
      </Route>
      <Route path="/login" element={<div>로그인 페이지</div>} />
    </Routes>
  );
}

export default Router;
