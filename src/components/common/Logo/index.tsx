import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import pxToRem from '@utils/pxToRem';

const Container = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex()}
  padding: ${pxToRem(6)};
  font-weight: 700;
  font-size: ${pxToRem(24)};

  & > svg {
    width: ${pxToRem(28)};
    height: ${pxToRem(28)};
    margin-right: ${pxToRem(12)};
    fill: ${({ theme }) => theme.color.PURPLE_700};
  }
`;

function Logo() {
  return (
    <Container>
      <LogoIcon />
      프리랭킹
    </Container>
  );
}

export default Logo;
