import { useCallback, useState } from 'react';

function usePopup(onClick?: React.MouseEventHandler<HTMLButtonElement>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      setIsOpen((prev) => !prev);
    },
    [onClick]
  );

  return { isOpen, handleClick };
}

export default usePopup;
