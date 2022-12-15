export type TableColumn = {
  column: string;
  width: number;
  id?: string;
};

export type TableData = {
  id: number;
  datas: ({
    value: React.ReactNode;
  } & CustomCSS)[];
  detail?: React.ReactNode;
};
