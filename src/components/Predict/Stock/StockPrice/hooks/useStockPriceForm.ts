function useStockPriceForm({
  handlePredict,
  inputValue
}: {
  handlePredict: (value: string) => void;
  inputValue: string;
}) {
  const handleChange = ({
    currentTarget: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    handlePredict(value.replaceAll(/\D/g, '').slice(0, 8));
  };

  const formattedValue = inputValue
    ? Number(inputValue).toLocaleString('ko-kr')
    : '';

  return { handleChange, formattedValue };
}

export default useStockPriceForm;
