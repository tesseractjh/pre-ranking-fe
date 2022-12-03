import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import InnerContainer from '../InnerContainer';
import Indicator from './Indicator';
import type { Status } from './hooks/useCarousel';
import useCarousel from './hooks/useCarousel';

export type Item = {
  key: string;
  Component: React.FC;
};

interface Props extends CustomCSS {
  items: Item[];
}

const Container = styled.div<CustomCSS>`
  position: relative;
  height: ${pxToRem(300)};

  ${({ theme }) =>
    theme.media.mobile(`
      height: ${pxToRem(200)};  
  `)}

  ${({ css }) => css || ''}
`;

const Window = styled.ul`
  overflow: hidden;
  height: 100%;
`;

const WindowInner = styled.div<{ status: Status }>`
  ${({ theme }) => theme.mixin.flex('flex-start', 'stretch')}
  height: 100%;

  ${({ status }) => {
    switch (status) {
      case 'prevReady':
        return `
          transform: translate3d(-100%, 0, 0);
        `;

      case 'prevTransition':
        return `
          transform: translate3d(0, 0, 0);
          transition: transform 1s ease-in-out;
        `;

      case 'nextTransition':
        return `
          transform: translate3d(-100%, 0, 0);
          transition: transform 1s ease-in-out;
        `;

      default:
        return '';
    }
  }}
`;

const Item = styled.li`
  flex-shrink: 0;
  ${({ theme }) => theme.mixin.flex()}
  width: 100%;
  padding: ${pxToRem(10)};
`;

function Carousel({ css, items: allItems }: Props) {
  const { order, items, status, handleIndicatorClick } = useCarousel(allItems);

  return (
    <Container css={css}>
      <InnerContainer>
        <Window>
          <WindowInner status={status}>
            {items.map(({ key, Component }) => (
              <Item key={key}>
                <Component />
              </Item>
            ))}
          </WindowInner>
        </Window>
      </InnerContainer>
      <Indicator
        items={allItems}
        order={order}
        onClick={handleIndicatorClick}
      />
    </Container>
  );
}

export default Carousel;
