import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Container = styled.p`
  padding: ${pxToRem(10, 20)};
  margin-bottom: ${pxToRem(40)};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.GRAY_50};
  font-size: ${pxToRem(14)};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.GRAY_700};
`;

function PredictComment({ children }: Props) {
  return <Container>{children}</Container>;
}

export default PredictComment;
