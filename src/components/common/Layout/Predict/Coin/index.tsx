import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import useCoin from './hooks/useCoin';
import numberFormatter from '@utils/numberFormatter';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-end')}
  font-weight: 700;
  font-size: ${pxToRem(18)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }
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
