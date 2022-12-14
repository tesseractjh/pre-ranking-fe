import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/Login';
import SignupPage from '@pages/Signup';
import PredictPage from '@pages/Predict';
import MainLayout from '@components/common/Layout/Main';
import AuthRoute from '@components/common/AuthRoute';
import MenuLayout from '@components/common/Layout/Menu';
import RankingPage from '@pages/Ranking';
import MyPagePage from '@pages/MyPage';
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
        <Route path="predict" element={<Navigate to="all" replace />} />
        <Route path="ranking" element={<Navigate to="all" replace />} />
        <Route element={<MenuLayout />}>
          <Route path="predict/*" element={<PredictPage />} />
          <Route path="ranking/*" element={<RankingPage />} />
        </Route>
        <Route path="mypage" element={<Navigate to="all" replace />} />
        <Route path="mypage/*" element={<MyPagePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default Router;
