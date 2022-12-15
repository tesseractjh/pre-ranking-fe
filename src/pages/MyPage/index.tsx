import { Route, Routes } from 'react-router-dom';
import MyPageLayout from '@components/common/Layout/MyPage';
import MyPage from '@components/MyPage';

function MyPagePage() {
  return (
    <Routes>
      <Route element={<MyPageLayout />}>
        <Route path="*" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default MyPagePage;
