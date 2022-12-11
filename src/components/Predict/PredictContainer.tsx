import styled from 'styled-components';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import pxToRem from '@utils/pxToRem';

interface Props {
  data: unknown;
  onIntersect: () => Promise<unknown>;
  children: React.ReactNode;
}

const Container = styled.ul`
  padding: ${pxToRem(0, 20)};
`;

function PredictContainer({ data, onIntersect, children }: Props) {
  const target = useInfiniteScroll<HTMLUListElement>(data, onIntersect);

  return <Container ref={target}>{children}</Container>;
}

export default PredictContainer;
