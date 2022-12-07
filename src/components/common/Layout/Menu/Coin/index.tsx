import styled, { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import numberFormatter from '@utils/numberFormatter';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import useCoin from './hooks/useCoin';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-end')}
  padding-right: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.WHITE};
  font-weight: 700;
  font-size: ${pxToRem(18)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(16)};

      & > svg {
        width: ${pxToRem(14)};
        height: ${pxToRem(14)};
        margin-right: ${pxToRem(8)};
      }
  `)}
`;

const FallbackStyle = css`
  position: static;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  background-color: transparent;

  & > div {
    width: 100%;
    height: 100%;

    & > div {
      border-width: ${pxToRem(2)};
    }
  }
`;

function Coin() {
  const { coin, isLoading } = useCoin();

  if (isLoading) {
    return (
      <Container>
        <CoinIcon />
        <ComponentLoading css={FallbackStyle} />
      </Container>
    );
  }

  return typeof coin === 'number' ? (
    <Container>
      <CoinIcon />
      {numberFormatter.coin(coin)}
    </Container>
  ) : null;
}

export default Coin;
