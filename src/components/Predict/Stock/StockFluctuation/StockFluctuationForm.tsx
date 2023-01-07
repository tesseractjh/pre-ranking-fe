import React from 'react';
import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { Triangle } from '@components/common/Triangle';
import useStockPredictionFormContext from '@components/Predict/hooks/useStockPredictionFormContext';

const Container = styled.div`
  margin: ${pxToRem(10, 0)};
`;

const PredictButton = styled.button<CustomCSS>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: 100%;
  height: ${pxToRem(40)};
  font-weight: 700;
  font-size: ${pxToRem(20)};
  transition: all 0.25s ease-in-out;

  &:disabled {
    cursor: default;
  }

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(18)};
  `)}

  ${({ css }) => css || ''}
`;

const IncreaseStyle = (value: string) => css`
  border: 1px solid ${({ theme }) => theme.color.RED_200};
  border-bottom: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.RED_50};

  &:hover {
    background-color: ${({ theme }) => theme.color.RED_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.RED_200};
  }

  ${({ theme }) =>
    value === '0' &&
    `
      border-color: ${theme.color.RED_400};
      background-color: ${theme.color.RED_300};

      &:hover, &:active {
        background-color: ${theme.color.RED_300};
      }
    `}

  ${({ theme }) =>
    value === '1' &&
    `
      background-color: ${theme.color.WHITE};
    `}
`;

const DecreaseStyle = (value: string) => css`
  border: 1px solid ${({ theme }) => theme.color.BLUE_200};
  border-top: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.BLUE_50};

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_100};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.BLUE_200};
  }

  ${({ theme }) =>
    value === '0' &&
    `
      background-color: ${theme.color.WHITE};
    `}

  ${({ theme }) =>
    value === '1' &&
    `
      border-color: ${theme.color.BLUE_400};
      background-color: ${theme.color.BLUE_300};

      &:hover, &:active {
        background-color: ${theme.color.BLUE_300};
      }
  `}
`;

function StockFluctuationForm() {
  const { handlePredict, inputValue, inputDisabled } =
    useStockPredictionFormContext();

  return (
    <Container>
      <PredictButton
        type="button"
        css={IncreaseStyle(inputValue)}
        onClick={() => handlePredict('0')}
        disabled={inputDisabled}
      >
        <Triangle />
        상승
      </PredictButton>
      <PredictButton
        type="button"
        css={DecreaseStyle(inputValue)}
        onClick={() => handlePredict('1')}
        disabled={inputDisabled}
      >
        <Triangle negative />
        하락
      </PredictButton>
    </Container>
  );
}

export default React.memo(StockFluctuationForm);
