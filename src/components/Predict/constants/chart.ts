const CHART_DATA: Record<
  string,
  (predictionValue: string, dataValue: number) => ChartData
> = {
  stock_fluctuation: (predictionValue, dataValue) =>
    predictionValue === '0'
      ? { value: dataValue, label: '상승', color: 'RED_400' }
      : { value: dataValue, label: '하락', color: 'BLUE_400' }
};

export default CHART_DATA;
