import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import usePagination from '../hooks/usePagination';

interface Props {
  totalCount: number;
  rowCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  unit: number;
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}
  padding: ${pxToRem(10)};
  margin-top: ${pxToRem(20)};

  ${({ theme }) =>
    theme.media.tablet(`
      max-width: ${pxToRem(400)};
      padding: ${pxToRem(10, 0)};
      margin: ${pxToRem(20, 'auto', 0)};
      justify-content: space-between;
      gap: 0;
      margin-top: ${pxToRem(10)};
  `)}
`;

const Button = styled.button<{ isSelected?: boolean }>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: ${pxToRem(36)};
  height: ${pxToRem(36)};
  border-radius: 50%;
  font-size: ${pxToRem(16)};

  ${({ isSelected, theme }) =>
    isSelected &&
    `
      font-weight: 700;
      background-color: ${theme.color.GRAY_100};
      color: ${theme.color.PURPLE_500};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.color.GRAY_200};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

function Pagination({
  totalCount,
  rowCount,
  page: curPage,
  setPage,
  unit
}: Props) {
  const { totalPage, handleClick, handlePrevClick, handleNextClick, pages } =
    usePagination(totalCount, rowCount, curPage, setPage, unit);

  return (
    <Container>
      <Button disabled={curPage <= unit} onClick={handlePrevClick}>
        ←
      </Button>
      {pages.map((page) => (
        <Button
          key={`page-${page}`}
          isSelected={page === curPage}
          onClick={handleClick(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        disabled={
          !totalPage ||
          Math.floor((curPage - 1) / unit) ===
            Math.floor((totalPage - 1) / unit)
        }
        onClick={handleNextClick}
      >
        →
      </Button>
    </Container>
  );
}

export default React.memo(Pagination);
