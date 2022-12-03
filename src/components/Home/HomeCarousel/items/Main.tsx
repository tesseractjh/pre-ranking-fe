import React from 'react';
import styled from 'styled-components';
import SlotMachine from '@components/common/SlotMachine';
import pxToRem from '@utils/pxToRem';

const Container = styled.div`
  padding: ${pxToRem(0, 20)};
`;

const Title = styled.p`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  flex-wrap: wrap;
  row-gap: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(36)};

  ${({ theme }) =>
    theme.media.mobile(`
    font-size: ${pxToRem(24)};  
  `)}
`;

const SlotMachineWrapper = styled.span`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')};
`;

const Comment = styled.p`
  margin-top: ${pxToRem(40)};
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_700};
  line-height: 1.5;

  ${({ theme }) =>
    theme.media.mobile(`
      margin-top: ${pxToRem(20)};
      font-size: ${pxToRem(14)};

      & > br {
        display: none;
      }  
  `)}
`;

const slotItems = [
  '주식 종가',
  '축구 경기 결과',
  '로또 당첨 번호',
  '올림픽 메달 수',
  '선거 결과',
  '영화 관객수'
];

function Main() {
  return (
    <Container>
      <Title>
        <SlotMachineWrapper>
          <SlotMachine items={slotItems} />를 예측하고
        </SlotMachineWrapper>
        <strong>&nbsp;순위를 확인하세요!</strong>
      </Title>
      <Comment>
        스포츠, 경제, 사회 현상 등 모든 분야에 대해 예측하고, <br />
        예측 결과에 대한 점수를 통해 사람들과 경쟁하세요.
      </Comment>
    </Container>
  );
}

export default React.memo(Main);
