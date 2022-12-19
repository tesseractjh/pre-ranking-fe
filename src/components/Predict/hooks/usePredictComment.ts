import { useState } from 'react';

function usePredictComment() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleClick };
}

export default usePredictComment;
