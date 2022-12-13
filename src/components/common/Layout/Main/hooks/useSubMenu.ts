import { useLocation } from 'react-router-dom';

function useSubMenu() {
  const { pathname } = useLocation();
  return pathname.split('/')[1] !== 'mypage';
}

export default useSubMenu;
