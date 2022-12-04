import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import pxToRem from '@utils/pxToRem';
import LOGO_SIZE from './constants/logoSize';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  size?: Size;
}

const Container = styled.span<{ size?: Size }>`
  ${({ size, theme }) => `
    ${theme.mixin.inlineFlex()}
    padding: ${pxToRem(6)};
    font-weight: ${LOGO_SIZE[size ?? 'md'].fontWeight};
    font-size: ${pxToRem(LOGO_SIZE[size ?? 'md'].fontSize)};

    & > svg {
      width: ${pxToRem(LOGO_SIZE[size ?? 'md'].svgWidth)};
      height: ${pxToRem(LOGO_SIZE[size ?? 'md'].svgHeight)};
      margin-right: ${pxToRem(LOGO_SIZE[size ?? 'md'].marginRight)};
      fill: ${theme.color.PURPLE_700};
    }

    ${theme.media.tablet(`
      font-weight: ${LOGO_SIZE[size ?? 'sm'].fontWeight};
      font-size: ${pxToRem(LOGO_SIZE[size ?? 'sm'].fontSize)};

      & > svg {
        width: ${pxToRem(LOGO_SIZE[size ?? 'sm'].svgWidth)};
        height: ${pxToRem(LOGO_SIZE[size ?? 'sm'].svgHeight)};
        margin-right: ${pxToRem(LOGO_SIZE[size ?? 'sm'].marginRight)};
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
