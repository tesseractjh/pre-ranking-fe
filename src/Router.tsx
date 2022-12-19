import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@components/common/Layout/Main';
import AuthRoute from '@components/common/AuthRoute';
import NotFound from '@components/common/Fallback/Error/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from '@components/common/Fallback/Error/PageError';
import Loading from '@components/common/Fallback/Loading';
import useGoogleAnalytics from '@hooks/useGoogleAnalytics';

const HomePage = lazy(() => import('./pages'));
const MenuLayout = lazy(() => import('@components/common/Layout/Menu'));
const PredictPage = lazy(() => import('@pages/Predict'));
const RankingPage = lazy(() => import('@pages/Ranking'));
const MyPagePage = lazy(() => import('@pages/MyPage'));
const LoginPage = lazy(() => import('@pages/Login'));
const SignupPage = lazy(() => import('@pages/Signup'));

function Router() {
  useGoogleAnalytics();

  return (
    <ErrorBoundary fallback={<PageError />}>
      <Suspense fallback={<Loading />}>
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
          <Route path="login/*" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Router;
