import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { NavBarLinkButton } from '../types/navBar';

function useNavBarGroup(
  ref: React.RefObject<HTMLUListElement>,
  children: NavBarLinkButton[]
) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(
    children.some(({ link }) => pathname === `/predict/${link}`)
  );
  const [height, setHeight] = useState(0);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return { isOpen, height, handleClick };
}

export default useNavBarGroup;
