import styled from 'styled-components';
import Deferred from '@components/common/Deferred';
import Spinner from './Spinner';

interface Props extends CustomCSS {
  delay?: number;
}

const Container = styled.div<CustomCSS>`
  ${({ theme }) => theme.mixin.flex()}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  ${({ css }) => css || ''}
`;

function ComponentLoading({ css, delay = 200 }: Props) {
  return (
    <Deferred delay={delay}>
      <Container css={css}>
        <Spinner />
      </Container>
    </Deferred>
  );
}

export default ComponentLoading;
