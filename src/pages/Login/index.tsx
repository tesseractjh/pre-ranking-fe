import AuthLayout from '@components/common/Layout/Auth';
import Login from '@components/Login';
import { ReactComponent as LoginIcon } from '@assets/icons/login.svg';
import { Route, Routes } from 'react-router-dom';
import LoginRedirect from '../../components/Login/LoginRedirect';

function LoginPage() {
  return (
    <Routes>
      <Route
        index
        element={
          <AuthLayout
            title={
              <>
                <LoginIcon />
                로그인
              </>
            }
          >
            <Login />
          </AuthLayout>
        }
      />
      <Route path="redirect" element={<LoginRedirect />} />
    </Routes>
  );
}

export default LoginPage;
