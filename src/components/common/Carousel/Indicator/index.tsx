import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import type { Item } from '..';

interface Props {
  items: Item[];
  order: number;
  onClick: (indicatorClick: number) => React.MouseEventHandler;
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between', 'center', pxToRem(16))}
  position: absolute;
  left: 50%;
  bottom: ${pxToRem(20)};
  transform: translateX(-50%);
  opacity: 0.5;

  ${({ theme }) =>
    theme.media.mobile(`
      bottom: ${pxToRem(10)};
  `)}
`;

const Button = styled.button<{ isSelected: boolean }>`
  width: ${pxToRem(10)};
  height: ${pxToRem(10)};
  border-radius: 50%;
  background-color: ${({ isSelected, theme }) =>
    theme.color[isSelected ? 'PURPLE_700' : 'PURPLE_400']};

  &:hover {
    transform: scale(1.2);
  }
`;

function Indicator({ items, order, onClick }: Props) {
  return (
    <Container>
      {items.map(({ key }, index) => (
        <Button
          key={key}
          type="button"
          isSelected={index === order}
          onClick={onClick(index)}
        />
      ))}
    </Container>
  );
}

export default React.memo(Indicator);
