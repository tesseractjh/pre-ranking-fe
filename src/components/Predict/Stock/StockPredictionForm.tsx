import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import dateFormatter from '@utils/dateFormatter';
import Button, { HoverInactive, Medium } from '@components/common/Button';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import usePredictionForm from '../hooks/usePredictionForm';
import usePredictionItem from '../hooks/usePredictionItem';
import { StockPredictionFormContext } from '../contexts/StockPredictionFormContext';

interface Props {
  prediction: Model.PredictionDetail & Model.StockFluctuation;
  endDate: number;
  children: React.ReactNode;
}

const Wrapper = styled.div<CustomCSS>`
  width: ${pxToRem(240)};
  padding: ${pxToRem(4)};

  ${({ css }) => css || ''}

  &::before, &::after {
    z-index: 10;
  }

  &:hover::after {
    padding: ${pxToRem(6)};
    font-weight: 700;
    font-size: ${pxToRem(24)};
  }

  ${({ theme }) =>
    theme.media.laptop(`
      width: 100%;
  `)}
`;

const Container = styled.div<{ hasPrediction: boolean; isOverdue: boolean }>`
  ${({ theme }) => theme.mixin.flexColumn('space-between', 'stretch')}
  position: relative;
  height: 100%;
  padding: ${pxToRem(8)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.WHITE};

  &::before {
    position: absolute;
    top: ${pxToRem(-4)};
    left: ${pxToRem(-4)};
    padding: ${pxToRem(4)};
    font-size: ${pxToRem(12)};
    color: ${({ theme }) => theme.color.WHITE};

    ${({ hasPrediction, isOverdue, theme }) => {
      if (isOverdue && hasPrediction) {
        return `
          content: '마감';
          top: ${pxToRem(16)};
          background-color: ${theme.color.GRAY_900};
        `;
      }

      if (isOverdue) {
        return `
          content: '마감';
          background-color: ${theme.color.GRAY_900};
        `;
      }

      if (hasPrediction) {
        return `
          content: '예측완료';
          background-color: ${theme.color.PURPLE_600};
        `;
      }

      return '';
    }}
  }

  ${({ hasPrediction, isOverdue, theme }) =>
    hasPrediction &&
    isOverdue &&
    `
      &::after {
        content: '예측완료';
        position: absolute;
        top: ${pxToRem(-4)};
        left: ${pxToRem(-4)};
        padding: ${pxToRem(4)};
        background-color: ${theme.color.PURPLE_600};
        font-size: ${pxToRem(12)};
        color: ${theme.color.WHITE};
      }
    `}
`;

const NextDate = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(16)};
  text-align: center;

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(14)};
  `)}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch', pxToRem(10))}
  padding-left: ${pxToRem(10)};
`;

const Coin = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')};
  width: ${pxToRem(50)};
  font-weight: 700;
  font-size: ${pxToRem(14)};

  & > svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }
`;

const DetailLink = styled(Link)<{ $css: CustomCSS['css'] }>`
  ${({ $css }) => $css || ''}
  text-align: center;
`;

const SubmitButtonStyle = css`
  flex: 1;

  &:disabled {
    background-color: ${({ theme }) => theme.color.GRAY_400};
    color: ${({ theme }) => theme.color.WHITE};
    cursor: not-allowed;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.color.GRAY_400};
      color: ${({ theme }) => theme.color.WHITE};
    }
  }
`;

function StockPredictionForm({ prediction, endDate, children }: Props) {
  const category = prediction.prediction_category.split('_').slice(1).join('_');

  const { coin, inputValue, isDetail, handlePredict, handleSubmit } =
    usePredictionItem({
      predictionId: prediction.prediction_id,
      predictionValue: prediction.prediction_value,
      category
    });

  const {
    id,
    nextDate,
    requiredCoin,
    lackOfCoin,
    hasPrediction,
    isOverdue,
    inputDisabled,
    submitDisabled
  } = usePredictionForm({
    prediction,
    endDate,
    coin,
    inputValue,
    category
  });

  const contextValue = useMemo(
    () => ({ handlePredict, inputValue, isOverdue, inputDisabled }),
    [inputValue, inputDisabled]
  );

  return (
    <StockPredictionFormContext.Provider value={contextValue}>
      <Wrapper
        css={[
          lackOfCoin &&
            !hasPrediction &&
            !isOverdue &&
            HoverInactive('코인 부족')
        ].filter(Boolean)}
        className="form-predict"
      >
        <Container hasPrediction={hasPrediction} isOverdue={isOverdue}>
          <NextDate>{dateFormatter.getDateFromMonthToDay(nextDate)}</NextDate>
          {children}
          <Flex>
            <Coin>
              <CoinIcon />
              {requiredCoin}
            </Coin>
            {!isDetail && isOverdue ? (
              <DetailLink
                $css={[Medium, SubmitButtonStyle]}
                to={`/predict/detail/${id}`}
                className="form-submit"
              >
                예측 상세보기
              </DetailLink>
            ) : (
              <Button
                css={[Medium, SubmitButtonStyle]}
                className="form-submit"
                disabled={submitDisabled}
                onClick={handleSubmit}
              >
                {isOverdue
                  ? '예측마감'
                  : hasPrediction
                  ? '예측완료'
                  : '예측하기'}
              </Button>
            )}
          </Flex>
        </Container>
      </Wrapper>
    </StockPredictionFormContext.Provider>
  );
}

export default React.memo(StockPredictionForm);
