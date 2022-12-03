import { Routes, Route } from 'react-router-dom';
import Layout from '@components/common/Layout/Main';
import LoginPage from '@pages/Login';
import SignupPage from '@pages/Signup';
import AuthRoute from '@components/common/AuthRoute';
import HomePage from './pages';

function Router() {
  return (
    <Routes>
      <Route
        element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="predict" element={<div>개별 예측 페이지</div>} />
        <Route path="profile" element={<div>프로필 페이지</div>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
