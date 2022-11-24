import { useLocation } from 'react-router-dom';

function useQueryParams() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
}

export default useQueryParams;
