const debounce = <T extends Array<unknown>>(
  callback: (...args: T) => void,
  delay: number
) => {
  let timerId: NodeJS.Timeout;
  return (...args: T) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, ...args);
  };
};

export default debounce;
