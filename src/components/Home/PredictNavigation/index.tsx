import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import type { Predict } from '../types/predict';
import PredictLink from './PredictLink';

interface Props {
  icon: SVGIcon;
  title: string;
  predicts: Predict[];
}

const Container = styled.div``;

const Title = styled.h2`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  margin-bottom: ${pxToRem(30)};
  font-weight: 700;
  font-size: ${pxToRem(28)};

  & > svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
    margin-right: ${pxToRem(12)};
    fill: ${({ theme }) => theme.color.PURPLE_800};
  }

  ${({ theme }) =>
    theme.media.mobile(`
      height: ${pxToRem(60)};
      margin: 0;
      border-bottom: 1px solid ${theme.color.GRAY_300};
      font-size: ${pxToRem(24)};

      & > svg {
        width: ${pxToRem(20)};
        height: ${pxToRem(20)};
        margin-right: ${pxToRem(10)};
      }
  `)}
`;

const PredictContainer = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', pxToRem(20))}
  flex-wrap: wrap;

  ${({ theme }) =>
    theme.media.mobile(`
      ${theme.mixin.flexColumn('flex-start', 'stretch', 0)}
      flex-wrap: nowrap;  
  `)}
`;

function PredictNavigation({ icon: Icon, title, predicts }: Props) {
  return (
    <Container>
      <Title>
        <Icon />
        {title}
      </Title>
      <PredictContainer>
        {predicts.map((props) => (
          <PredictLink key={props.content} {...props} />
        ))}
      </PredictContainer>
    </Container>
  );
}

export default PredictNavigation;
