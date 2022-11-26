import React, { useCallback, useEffect, useState } from 'react';

function usePopup(
  popup: React.RefObject<HTMLDivElement>,
  button: React.RefObject<HTMLButtonElement>,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
) {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHidden((prev) => !prev);
    onClick?.(event);
  };

  const handleDocumentClick = useCallback(({ target }: MouseEvent) => {
    if (
      !(target instanceof Element) ||
      !popup.current ||
      target.closest('.popup') === popup.current ||
      target.closest('button') === button.current
    ) {
      return;
    }
    setIsHidden(true);
  }, []);

  useEffect(() => {
    if (isHidden) {
      document.removeEventListener('click', handleDocumentClick);
    } else {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isHidden, handleDocumentClick]);

  return { isHidden, handleClick };
}

export default usePopup;
