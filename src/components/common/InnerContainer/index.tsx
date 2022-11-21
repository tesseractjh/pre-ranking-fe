import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${pxToRem(1140)};
  height: 100%;
  padding: ${pxToRem(0, 40)};
  margin: 0 auto;
`;

interface Props {
  children: React.ReactNode;
}

function InnerContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

export default InnerContainer;
