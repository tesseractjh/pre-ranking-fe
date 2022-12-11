import styled from 'styled-components';
import { INNER_CONTAINER_WIDTH } from '@constants/style';
import pxToRem from '@utils/pxToRem';

const Container = styled.div`
  max-width: ${pxToRem(INNER_CONTAINER_WIDTH)};
  height: 100%;
  padding: ${pxToRem(0, 40)};
  margin: 0 auto;

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(0, 20)};
  `)}
`;

interface Props {
  children: React.ReactNode;
}

function InnerContainer({ children }: Props) {
  return <Container>{children}</Container>;
}

export default InnerContainer;
