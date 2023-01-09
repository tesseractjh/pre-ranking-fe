import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as HelpIcon } from '@assets/icons/help.svg';
import usePredictComment from './hooks/usePredictComment';

interface Props {
  children: React.ReactNode;
}

const Container = styled.button`
  display: inline-block;
  width: 100%;
  padding: ${pxToRem(10, 20)};
  margin-bottom: ${pxToRem(40)};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.GRAY_50};
  font-size: ${pxToRem(14)};
  line-height: 1.5;
  text-align: left;
  color: ${({ theme }) => theme.color.GRAY_700};

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_100};
  }

  & svg {
    transform: translateY(${pxToRem(1)});
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin: ${pxToRem(0, 4)};

    &.svg-coin {
      fill: ${({ theme }) => theme.color.YELLOW_500};
      stroke: ${({ theme }) => theme.color.BLACK};
    }

    &.svg-score {
      fill: ${({ theme }) => theme.color.PURPLE_500};
    }
  }

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(12)};
      & svg {
        width: ${pxToRem(10)};
        height: ${pxToRem(10)};
        margin: ${pxToRem(0, 2)};
      }
  `)}
`;

const Bold = styled.strong`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  font-weight: 700;
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.BLACK};

  & > svg {
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    margin-right: ${pxToRem(10)};
  }

  &:not(:last-child) {
    margin-bottom: ${pxToRem(10)};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      font-size: ${pxToRem(14)};

      & > svg {
        width: ${pxToRem(13)};
        height: ${pxToRem(13)};
        margin-right: ${pxToRem(8)};
      }
  `)}
`;

function PredictComment({ children }: Props) {
  const { isOpen, handleClick } = usePredictComment();

  return (
    <Container onClick={handleClick}>
      <Bold>
        <HelpIcon />
        도움말
      </Bold>
      {isOpen && children}
    </Container>
  );
}

export default PredictComment;
