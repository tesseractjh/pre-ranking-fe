import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';

const Container = styled.div`
  padding: ${pxToRem(0, 20)};
`;

const Title = styled.p`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  flex-wrap: wrap;
  row-gap: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};

  & svg {
    width: ${pxToRem(30)};
    height: ${pxToRem(30)};
    margin-right: ${pxToRem(16)};
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }

  ${({ theme }) =>
    theme.media.mobile(`
      row-gap: ${pxToRem(6)};
      font-size: ${pxToRem(24)};

      & svg {
      width: ${pxToRem(20)};
      height: ${pxToRem(20)};
      margin-right: ${pxToRem(10)};
  }
  `)}
`;

const IconWrapper = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')}
`;

const Comment = styled.p`
  margin-top: ${pxToRem(40)};
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_700};
  line-height: 1.5;

  ${({ theme }) =>
    theme.media.tablet(`
      margin-top: ${pxToRem(20)};
      font-size: ${pxToRem(14)};

      & > br {
        display: none;
      }  
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
      font-size: ${pxToRem(12)};
      line-height: 1.3;  
  `)}
`;

const Small = styled.small`
  font-size: ${pxToRem(12)};

  ${({ theme }) =>
    theme.media.mobile(`
      font-size: ${pxToRem(10)};  
  `)}
`;

function Coin() {
  return (
    <Container>
      <Title>
        <IconWrapper>
          <CoinIcon />
          예측에 성공하고
        </IconWrapper>
        &nbsp;코인을 얻으세요!
      </Title>
      <Comment>
        코인은 예측에 참여하기 위해 사용되며, 예측에 성공하면 더 많은 코인이
        지급됩니다. <br />
        예측 참여에 필요한 코인이 많을수록, 적중했을 때 보상으로 지급받는 코인이
        더 많아집니다.
        <Small>
          <br />※ 코인은 실제 재화로 교환할 수 없는 프리랭킹의 가상 재화입니다.
        </Small>
      </Comment>
    </Container>
  );
}

export default React.memo(Coin);
