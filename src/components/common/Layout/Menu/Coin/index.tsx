import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import numberFormatter from '@utils/numberFormatter';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
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

function Coin() {
  const coin = useCoin();

  return typeof coin === 'number' ? (
    <Container>
      <CoinIcon />
      {numberFormatter.coin(coin)}
    </Container>
  ) : null;
}

export default Coin;
