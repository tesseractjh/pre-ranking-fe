import API from '@api/index';
import useQuery from '@hooks/useQuery';
import Error from '../Fallback/Error';
import Loading from '../Fallback/Loading';

interface Props {
  children: React.ReactNode;
}

function AuthRoute({ children }: Props) {
  const { isLoading, isError } = useQuery(
    ['accessToken'],
    API.user.getAccessToken,
    {
      staleTime: 10 * 1000
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <>{children}</>;
}

export default AuthRoute;
