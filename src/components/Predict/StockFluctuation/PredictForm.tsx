import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import dateFormatter from '@utils/dateFormatter';
import Button, { HoverInactive, Medium } from '@components/common/Button';
import { Triangle } from '@components/common/Triangle';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import COIN_REQUIREMENTS from '../constants/requirements';
import useStockFluctuationItem from './hooks/useStockFluctuationItem';

interface Props {
  prediction: Model.Prediction &
    Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
      participant_count: number;
      prediction_value: string;
    };
}

const Container = styled.div<CustomCSS & { hasPrediction: boolean }>`
  width: ${pxToRem(240)};
  padding: ${pxToRem(8)};
  background-color: ${({ hasPrediction, theme }) =>
    theme.color[hasPrediction ? 'GRAY_300' : 'PURPLE_200']};

  ${({ css }) => css || ''}

  &:hover::after {
    padding: ${pxToRem(6)};
    font-weight: 700;
    font-size: ${pxToRem(24)};
  }
`;

const RightContainer = styled.div`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch')}
  height: 100%;
  padding: ${pxToRem(8)};
  border-radius: ${pxToRem(8)};
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const NextDate = styled.span`
  font-weight: 700;
  font-size: ${pxToRem(16)};
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: ${pxToRem(10, 0)};
`;

const PredictButton = styled.button<CustomCSS>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  width: 100%;
  height: ${pxToRem(40)};
  font-weight: 700;
  font-size: ${pxToRem(20)};

  &:disabled {
    cursor: default;
  }

  ${({ css }) => css || ''}
`;

const Flex = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch', pxToRem(10))}
  padding: ${pxToRem(0, 10)};
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

const IncreaseStyle = (value: string) => css`
  border: 1px solid ${({ theme }) => theme.color.RED_200};
  border-bottom: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.RED_50};
  transition: all 0.3s ease-in-out;

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
  transition: all 0.3s ease-in-out;

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

function PredictForm({ prediction }: Props) {
  const {
    last_date: prevDate,
    result_date: nextDate,
    prediction_value: predictedValue
  } = prediction;
  const { coin, predictionValue, handlePredict } =
    useStockFluctuationItem(predictedValue);
  const requiredCoin =
    dateFormatter.getDateDiff(prevDate, nextDate) *
    COIN_REQUIREMENTS.STOCK_FLUCTUATION;
  const lackOfCoin = typeof coin === 'number' && coin < requiredCoin;
  const disabled = lackOfCoin || !!predictedValue;
  const submitDisabled = !predictionValue || disabled;

  return (
    <Container
      css={[lackOfCoin && HoverInactive('코인 부족')].filter(Boolean)}
      hasPrediction={!!predictedValue}
    >
      <RightContainer>
        <NextDate>{dateFormatter.getFromMonthToDay(nextDate)}</NextDate>
        <ButtonContainer>
          <PredictButton
            type="button"
            css={IncreaseStyle(predictionValue)}
            onClick={handlePredict('0')}
            disabled={disabled}
          >
            <Triangle />
            상승
          </PredictButton>
          <PredictButton
            type="button"
            css={DecreaseStyle(predictionValue)}
            onClick={handlePredict('1')}
            disabled={disabled}
          >
            <Triangle negative />
            하락
          </PredictButton>
        </ButtonContainer>
        <Flex>
          <Coin>
            <CoinIcon />
            {requiredCoin}
          </Coin>
          <Button css={[Medium, SubmitButtonStyle]} disabled={submitDisabled}>
            {predictedValue ? '예측완료' : '예측하기'}
          </Button>
        </Flex>
      </RightContainer>
    </Container>
  );
}

export default PredictForm;
