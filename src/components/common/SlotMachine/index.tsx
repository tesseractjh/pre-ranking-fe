import styled, { css, keyframes } from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends CustomCSS {
  items: string[];
}

const getSlotAnimation = (
  length: number,
  height: number,
  gap: number
) => keyframes`
  ${[...Array(length * 2)]
    .map(
      (_, index) => `
    ${Math.floor((100 * (index + 1)) / (length * 2))}% {
      transform: translate3d(0, ${pxToRem(
        -(Math.round(index / 2) * (height + gap))
      )}, 0);
    }
  `
    )
    .join('\n')}
`;

const Container = styled.span<CustomCSS>`
  overflow: hidden;
  display: inline-block;
  width: ${pxToRem(210)};
  height: ${pxToRem(36)};
  font-size: ${pxToRem(36)};
  text-align: right;

  ${({ theme }) =>
    theme.media.mobile(`
      width: ${pxToRem(140)};
      height: ${pxToRem(24)};
      font-size: ${pxToRem(24)};
  `)}

  ${({ css }) => css || ''}
`;

const List = styled.span<{
  itemLength: number;
}>`
  display: inline-block;
  animation: ${({ itemLength }) => getSlotAnimation(itemLength, 36, 10)}
    ${({ itemLength }) => itemLength * 2}s infinite;

  ${({ itemLength, theme }) =>
    theme.media.mobile(css`
      animation: ${getSlotAnimation(itemLength, 24, 8)} ${itemLength * 2}s
        infinite;
    `)}
`;

const Item = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.PURPLE_900};

  &:not(:last-of-type) {
    margin-bottom: ${pxToRem(10)};
  }

  ${({ theme }) =>
    theme.media.mobile(`
      &:not(:last-of-type) {
        margin-bottom: ${pxToRem(8)};
      }  
  `)}
`;

function SlotMachine({ css, items }: Props) {
  return (
    <Container css={css}>
      <List itemLength={items.length}>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
        <Item key="duplicate">{items[0]}</Item>
      </List>
    </Container>
  );
}

export default SlotMachine;
