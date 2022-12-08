import styled from 'styled-components';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import pxToRem from '@utils/pxToRem';

interface Props {
  onIntersect: () => Promise<unknown>;
  children: React.ReactNode;
}

const Container = styled.ul`
  padding: ${pxToRem(0, 20)};
`;

function PredictContainer({ onIntersect, children }: Props) {
  const target = useInfiniteScroll<HTMLUListElement>(onIntersect);

  return <Container ref={target}>{children}</Container>;
}

export default PredictContainer;
