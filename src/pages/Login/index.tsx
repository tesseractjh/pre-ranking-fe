import AuthLayout from '@components/common/Layout/Auth';
import Login from '@components/Login';

function LoginPage() {
  return (
    <AuthLayout title="로그인">
      <Login />
    </AuthLayout>
  );
}

export default LoginPage;
