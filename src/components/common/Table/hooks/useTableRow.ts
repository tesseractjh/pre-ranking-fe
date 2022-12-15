import { useCallback, useState } from 'react';

function useTableRow() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleClick = () => {
    setIsDetailOpen((prev) => !prev);
  };

  return { isDetailOpen, handleClick };
}

export default useTableRow;
