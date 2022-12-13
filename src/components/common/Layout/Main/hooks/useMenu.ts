import { useCallback, useState } from 'react';

function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, handleClick, handleClose };
}

export default useMenu;
