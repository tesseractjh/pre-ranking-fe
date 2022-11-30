import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import pxToRem from '@utils/pxToRem';
import logoSize from './constants/logoSize';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  size?: Size;
}

const Container = styled.span<{ size?: Size }>`
  ${({ size, theme }) => `
    ${theme.mixin.inlineFlex()}
    padding: ${pxToRem(6)};
    font-weight: ${logoSize[size ?? 'md'].fontWeight};
    font-size: ${pxToRem(logoSize[size ?? 'md'].fontSize)};

    & > svg {
      width: ${pxToRem(logoSize[size ?? 'md'].svgWidth)};
      height: ${pxToRem(logoSize[size ?? 'md'].svgHeight)};
      margin-right: ${pxToRem(logoSize[size ?? 'md'].marginRight)};
      fill: ${theme.color.PURPLE_700};
    }

    ${theme.media.tablet(`
      font-weight: ${logoSize[size ?? 'sm'].fontWeight};
      font-size: ${pxToRem(logoSize[size ?? 'sm'].fontSize)};

      & > svg {
        width: ${pxToRem(logoSize[size ?? 'sm'].svgWidth)};
        height: ${pxToRem(logoSize[size ?? 'sm'].svgHeight)};
        margin-right: ${pxToRem(logoSize[size ?? 'sm'].marginRight)};
        fill: ${theme.color.PURPLE_700};
      }
    `)}
  `}
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
