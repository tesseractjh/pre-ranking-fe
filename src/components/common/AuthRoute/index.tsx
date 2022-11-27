import useAccessToken from '@hooks/queries/useAccessToken';
import { useEffect, useState } from 'react';
import Error from '../Fallback/Error';
import Loading from '../Fallback/Loading';

interface Props {
  children: React.ReactNode;
}

function AuthRoute({ children }: Props) {
  const [isInitial, setIsInitial] = useState(true);
  const { isLoading, isError } = useAccessToken({ enabled: isInitial });

  useEffect(() => {
    if (isInitial && !isLoading) {
      setIsInitial(false);
    }
  }, [isLoading, isInitial]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <>{children}</>;
}

export default AuthRoute;
