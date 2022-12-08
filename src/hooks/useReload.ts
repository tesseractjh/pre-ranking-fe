import { useNavigate } from 'react-router-dom';

function useReload() {
  const navigate = useNavigate();
  const handleReload = () => {
    navigate(0);
  };

  return handleReload;
}

export default useReload;
