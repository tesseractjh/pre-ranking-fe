import API from '@api/index';
import { useNavigate } from 'react-router-dom';

function useSignout() {
  const navigate = useNavigate();

  const handleSignout = async () => {
    await API.user.signout();
    navigate(0);
  };

  return handleSignout;
}

export default useSignout;
