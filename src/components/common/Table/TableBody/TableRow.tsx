import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import type { TableColumn, TableData } from '../types/table';
import useTableRow from '../hooks/useTableRow';

interface Props {
  columns: TableColumn[];
  tableData: TableData;
}

const Row = styled.tr<{ isDetailOpen: boolean; hasDetail: boolean }>`
  border-bottom: 1px solid
    ${({ hasDetail, theme }) =>
      theme.color[hasDetail ? 'GRAY_200' : 'PURPLE_100']};

  ${({ isDetailOpen, hasDetail, theme }) =>
    isDetailOpen &&
    hasDetail &&
    `
      background-color: ${theme.color.PURPLE_100};
    `}
`;

const DetailRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.color.PURPLE_100};
  background-color: ${({ theme }) => theme.color.GRAY_100};
`;

const Cell = styled.td<CustomCSS>`
  padding: ${pxToRem(10, 0)};
  text-align: center;

  ${({ css }) => css || ''}
`;

function TableRow({ columns, tableData: { id, datas, detail } }: Props) {
  const { isDetailOpen, handleClick } = useTableRow();

  return (
    <>
      <Row
        hasDetail={!!detail}
        isDetailOpen={isDetailOpen}
        onClick={handleClick}
      >
        {datas.map(({ value, css }, index) => (
          <Cell key={`${columns[index].column}-${id}`} css={css}>
            {value}
          </Cell>
        ))}
      </Row>
      {detail && isDetailOpen && <DetailRow>{detail}</DetailRow>}
    </>
  );
}

export default TableRow;
