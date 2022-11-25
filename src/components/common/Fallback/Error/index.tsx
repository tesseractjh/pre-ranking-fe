import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as WarningIcon } from '@assets/icons/warning.svg';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexColumn()}
  width: 100vw;
  height: 100vh;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_400};
  text-align: center;

  & > svg {
    width: ${pxToRem(60)};
    height: ${pxToRem(60)};
    margin-bottom: ${pxToRem(30)};
    fill: ${({ theme }) => theme.color.PURPLE_600};
  }
`;

const Title = styled.h1`
  margin-bottom: ${pxToRem(20)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${({ theme }) => theme.color.BLACK};
`;

function Error() {
  return (
    <Container>
      <WarningIcon />
      <Title>연결에 실패했습니다!</Title>잠시 후 다시 시도해주세요.
    </Container>
  );
}

export default Error;