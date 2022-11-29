import styled from 'styled-components';
import Deferred from '@components/common/Deferred';
import Spinner from './Spinner';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

function ComponentLoading() {
  return (
    <Deferred delay={200}>
      <Container>
        <Spinner />
      </Container>
    </Deferred>
  );
}

export default ComponentLoading;
