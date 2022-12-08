import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Container = styled.ul`
  padding: ${pxToRem(0, 20)};
`;

function PredictContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

export default PredictContainer;
