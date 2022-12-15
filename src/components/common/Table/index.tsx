import React from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import TableBody from './TableBody';
import TableHead from './TableHead';
import type { TableColumn, TableData } from './types/table';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowCount: number;
  unit: number;
  columns: TableColumn[];
  totalCount: number;
  data: TableData[];
}

const Container = styled.table`
  width: 100%;
`;

function Table({
  page,
  setPage,
  rowCount,
  unit,
  columns,
  totalCount,
  data
}: Props) {
  return (
    <div>
      <Container>
        <TableHead columns={columns} />
        <TableBody columns={columns} data={data} />
      </Container>
      <Pagination
        totalCount={totalCount}
        rowCount={rowCount}
        page={page}
        setPage={setPage}
        unit={unit}
      />
    </div>
  );
}

export default React.memo(Table);
