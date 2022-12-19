import Loading from '@components/common/Fallback/Loading';
import useLoginRedirect from './hooks/useLoginRedirect';

function LoginRedirect() {
  useLoginRedirect();

  return <Loading />;
}

export default LoginRedirect;
