import { css } from 'styled-components';
import Carousel from '@components/common/Carousel';
import { HOME_CAROUSEL_ITEMS } from './constants/items';

const CarouselStyle = css`
  background-color: ${({ theme }) => theme.color.PURPLE_100};
`;

function HomeCarousel() {
  return <Carousel css={CarouselStyle} items={HOME_CAROUSEL_ITEMS} />;
}

export default HomeCarousel;
