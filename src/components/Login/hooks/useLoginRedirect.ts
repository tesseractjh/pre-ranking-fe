import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useQueryParams from '@hooks/useQueryParams';
import API from '@api/index';

function useLoginRedirect() {
  const { token } = useQueryParams();
  const navigate = useNavigate();

  const getRefreshToken = async () => {
    await API.user.signin({ token });
    navigate('/', { replace: true });
  };

  useEffect(() => {
    getRefreshToken();
  }, []);
}

export default useLoginRedirect;
