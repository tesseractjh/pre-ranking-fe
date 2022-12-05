import { ReactComponent as ChevronIcon } from '@assets/icons/chevron.svg';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

const Container = styled.span`
  margin: ${pxToRem(0, 10)};

  & > svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    transform: rotate(-90deg) translateX(${pxToRem(1)});
  }
`;

function Chevron() {
  return (
    <Container>
      <ChevronIcon />
    </Container>
  );
}

export default Chevron;
