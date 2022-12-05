import { Routes, Route } from 'react-router-dom';
import LoginPage from '@pages/Login';
import SignupPage from '@pages/Signup';
import PredictPage from '@pages/Predict';
import MainLayout from '@components/common/Layout/Main';
import AuthRoute from '@components/common/AuthRoute';
import HomePage from './pages';

function Router() {
  return (
    <Routes>
      <Route
        element={
          <AuthRoute>
            <MainLayout />
          </AuthRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="predict/*" element={<PredictPage />} />
        <Route path="profile" element={<div>프로필 페이지</div>} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
