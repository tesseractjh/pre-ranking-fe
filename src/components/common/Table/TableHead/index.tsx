import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import type { TableColumn } from '../types/table';

interface Props {
  columns: TableColumn[];
}

const Container = styled.thead`
  font-weight: 700;
  font-size: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.laptop(`
      font-size: ${pxToRem(14)};
  `)}
`;

const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.PURPLE_300};
  background-color: ${({ theme }) => theme.color.PURPLE_50};
`;

const Cell = styled.th<{ ratio: number }>`
  width: ${({ ratio }) => ratio}%;
  padding: ${pxToRem(10, 0)};
`;

function TableHead({ columns }: Props) {
  const widthSum = columns.reduce((acc, { width }) => acc + width, 0);

  return (
    <Container>
      <Row>
        {columns.map(({ column, width }) => (
          <Cell key={column} ratio={(width * 100) / widthSum}>
            {column}
          </Cell>
        ))}
      </Row>
    </Container>
  );
}

export default React.memo(TableHead);
