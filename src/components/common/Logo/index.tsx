import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import pxToRem from '@utils/pxToRem';
import logoSize from './constants/logoSize';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  size?: Size;
}

const Container = styled.span<{ size?: Size }>`
  ${({ theme }) => theme.mixin.inlineFlex()}
  padding: ${pxToRem(6)};
  font-weight: ${({ size }) => logoSize[size ?? 'md'].fontWeight};
  font-size: ${({ size }) => pxToRem(logoSize[size ?? 'md'].fontSize)};

  & > svg {
    width: ${({ size }) => pxToRem(logoSize[size ?? 'md'].svgWidth)};
    height: ${({ size }) => pxToRem(logoSize[size ?? 'md'].svgHeight)};
    margin-right: ${({ size }) => pxToRem(logoSize[size ?? 'md'].marginRight)};
    fill: ${({ theme }) => theme.color.PURPLE_700};
  }
`;

function Logo({ size }: Props) {
  return (
    <Container size={size}>
      <LogoIcon />
      프리랭킹
    </Container>
  );
}

export default Logo;
