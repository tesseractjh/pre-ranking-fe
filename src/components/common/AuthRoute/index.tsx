import useAccessToken from '@hooks/queries/useAccessToken';
import Error from '../Fallback/Error';
import Loading from '../Fallback/Loading';

interface Props {
  children: React.ReactNode;
}

function AuthRoute({ children }: Props) {
  const { isLoading, isError } = useAccessToken();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <>{children}</>;
}

export default AuthRoute;
