import React from 'react';
import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Input from '@components/common/Form/Input';
import useStockPredictionFormContext from '@components/Predict/hooks/useStockPredictionFormContext';
import useStockPriceForm from './hooks/useStockPriceForm';

interface Props {
  price: number;
}

const Container = styled.div<{
  hasInputValue: boolean;
  isOverdue: boolean;
  diff: number;
}>`
  ${({ theme }) => theme.mixin.flex()}
  gap: ${pxToRem(8)};
  margin: ${pxToRem(10, 0)};
  font-size: ${pxToRem(18)};

  & input {
    ${({ hasInputValue, theme }) =>
      hasInputValue && `border-color: ${theme.color.PURPLE_300};`}

    ${({ isOverdue, theme }) =>
      isOverdue &&
      `
        background-color: ${theme.color.GRAY_200};
        cursor: default;
      `}     

    color: ${({ diff, theme }) => {
      if (diff > 0) {
        return theme.color.RED_600;
      }
      if (diff < 0) {
        return theme.color.BLUE_600;
      }
      return theme.color.BLACK;
    }};
  }

  ${({ theme }) =>
    theme.media.mobile(`
      gap: ${pxToRem(4)};
      font-size: ${pxToRem(14)};

      & input {
        padding: ${pxToRem(3, 8)};
      }
  `)}
`;

const InputStyle = css`
  width: ${pxToRem(150)};
  font-weight: 900;
  text-align: right;
`;

function StockPriceForm({ price }: Props) {
  const { handlePredict, inputValue, isOverdue, inputDisabled } =
    useStockPredictionFormContext();

  const { handleChange, formattedValue } = useStockPriceForm({
    handlePredict,
    inputValue
  });

  return (
    <Container
      hasInputValue={inputValue !== ''}
      isOverdue={isOverdue}
      diff={Number(inputValue) - price}
    >
      <Input
        css={InputStyle}
        onChange={handleChange}
        value={formattedValue}
        readOnly={inputDisabled}
      />
      원
    </Container>
  );
}

export default React.memo(StockPriceForm);
