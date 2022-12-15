import type { TableData } from '@components/common/Table/types/table';
import normalizeStockFluctuation from './stockFluctuation';

const normalizeData = (records: Model.PredictionRecord[]) =>
  records.map((record) => {
    switch (record.category) {
      case 'stock_fluctuation':
        return normalizeStockFluctuation(record);
      default:
        return [];
    }
  }) as TableData[];

export default normalizeData;
