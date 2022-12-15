function usePagination(
  totalCount: number,
  rowCount: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  unit: number
) {
  const totalPage = Math.ceil(totalCount / rowCount);
  const handleClick = (page: number) => () => setPage(page);
  const pages = [...Array(totalPage < unit ? totalPage : unit)]
    .map((_, index) => Math.floor((page - 1) / unit) * unit + index + 1)
    .filter((page) => page <= totalPage);

  const handlePrevClick = handleClick(
    page > unit ? Math.floor((page - 1) / unit) * unit : 1
  );

  const handleNextClick = handleClick(
    Math.floor((page - 1) / unit + 1) * unit + 1
  );

  return { totalPage, handleClick, handlePrevClick, handleNextClick, pages };
}

export default usePagination;
