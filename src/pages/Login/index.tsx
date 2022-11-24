import AuthLayout from '@components/common/Layout/Auth';
import Login from '@components/Login';
import { ReactComponent as LoginIcon } from '@assets/icons/login.svg';

function LoginPage() {
  return (
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
  );
}

export default LoginPage;
