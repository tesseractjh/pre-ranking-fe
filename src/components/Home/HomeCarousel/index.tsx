import { css } from 'styled-components';
import Carousel from '@components/common/Carousel';
import Main from './items/Main';
import Coin from './items/Coin';

const CarouselStyle = css`
  background-color: ${({ theme }) => theme.color.PURPLE_100};
`;

const items = [
  {
    key: 'main',
    Component: Main
  },
  {
    key: 'coin',
    Component: Coin
  }
];

function HomeCarousel() {
  return <Carousel css={CarouselStyle} items={items} />;
}

export default HomeCarousel;
