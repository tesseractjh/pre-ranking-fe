import { createContext } from 'react';

export const StockPredictionFormContext = createContext<{
  handlePredict: (value: string) => void;
  inputValue: string;
  inputDisabled: boolean;
} | null>(null);
