import { checkboxFilterState } from '@recoil/filter';
import { useRecoilState } from 'recoil';

function useCheckbox(id: string, category: string) {
  const [checked, setChecked] = useRecoilState(
    checkboxFilterState({ id, category })
  );

  const handleClick = () => setChecked((prev) => !prev);

  return { checked, handleClick };
}

export default useCheckbox;
