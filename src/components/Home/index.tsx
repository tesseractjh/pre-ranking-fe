import styled from 'styled-components';
import InnerContainer from '@components/common/InnerContainer';
import pxToRem from '@utils/pxToRem';
import HomeCarousel from './HomeCarousel';
import PREDICT_LIST from './constants/predictList';
import PredictNavigation from './PredictNavigation';

const ContentContainer = styled.article`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(50))}
  margin-top: ${pxToRem(40)};

  ${({ theme }) =>
    theme.media.mobile(`
      gap: ${pxToRem(20)};  
  `)}
`;

function Home() {
  return (
    <>
      <section>
        <HomeCarousel />
      </section>
      <section>
        <InnerContainer>
          <ContentContainer>
            {PREDICT_LIST.map((props) => (
              <PredictNavigation key={props.title} {...props} />
            ))}
          </ContentContainer>
        </InnerContainer>
      </section>
    </>
  );
}

export default Home;
