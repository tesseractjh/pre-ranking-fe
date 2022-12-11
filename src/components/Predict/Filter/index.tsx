import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props {
  children: React.ReactNode;
}

const Container = styled.ul`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(10))}
  flex-wrap: wrap;
`;

function PredictFilter({ children }: Props) {
  return <Container>{children}</Container>;
}

export default PredictFilter;
