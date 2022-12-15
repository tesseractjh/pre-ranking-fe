import styled from 'styled-components';
import Pagination from './Pagination';
import TableBody from './TableBody';
import TableHead from './TableHead';
import type { TableColumn, TableData } from './types/table';

interface Props {
  columns: TableColumn[];
  count: number;
  data: TableData[];
}

const Container = styled.table`
  width: 100%;
`;

function Table({ columns, count, data }: Props) {
  return (
    <div>
      <Container>
        <TableHead columns={columns} />
        <TableBody columns={columns} data={data} />
      </Container>
      <Pagination />
    </div>
  );
}

export default Table;
