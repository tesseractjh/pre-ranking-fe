import { atomFamily } from 'recoil';

export type CheckboxFilterStateParams = {
  id: string;
  category: string;
};

export const checkboxFilterState = atomFamily<
  boolean,
  CheckboxFilterStateParams
>({
  key: 'checkboxFilterState',
  default: false
});
