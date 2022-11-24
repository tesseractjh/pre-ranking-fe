import AuthLayout from '@components/common/Layout/Auth';
import Signup from '@components/Signup';

function SignupPage() {
  return (
    <AuthLayout title="회원가입">
      <Signup />
    </AuthLayout>
  );
}

export default SignupPage;
