import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import type { TableColumn, TableData } from '../types/table';
import TableRow from './TableRow';

interface Props {
  columns: TableColumn[];
  data: TableData[];
}

const Container = styled.tbody`
  font-size: ${pxToRem(14)};
`;

function TableBody({ columns, data }: Props) {
  return (
    <Container>
      {data.map((tableData) => (
        <TableRow key={tableData.id} columns={columns} tableData={tableData} />
      ))}
    </Container>
  );
}

export default TableBody;
