import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import Deferred from '../../Deferred';
import Logo from '../../Logo';
import Spinner from './Spinner';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}
  width: 100vw;
  height: 100vh;
`;

function Loading() {
  return (
    <Deferred delay={300}>
      <Container>
        <Logo size="lg" />
        <Spinner />
      </Container>
    </Deferred>
  );
}

export default Loading;
