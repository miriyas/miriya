export interface GADataRow {
  dimensionValues: {
    value: string;
    oneValue: string;
  }[];
  metricValues: {
    value: string;
    oneValue: string;
  }[];
}

export interface CounterData {
  total: number[];
  today: number[];
}
