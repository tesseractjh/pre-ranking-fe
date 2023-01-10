import { createContext } from 'react';

export const StockPredictionFormContext = createContext<{
  handlePredict: (value: string) => void;
  inputValue: string;
  isOverdue: boolean;
  inputDisabled: boolean;
} | null>(null);
