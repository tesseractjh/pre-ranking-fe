import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends CustomCSS {
  all?: boolean;
  icon?: SVGIcon;
  category?: string;
  predictionValue: string | null;
  endDate: number;
  children: React.ReactNode;
}

const Wrapper = styled.li<
  CustomCSS & { hasPrediction: boolean; isOverdue: boolean }
>`
  overflow: hidden;
  margin-bottom: ${pxToRem(40)};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ hasPrediction, isOverdue, theme }) => {
    let color: string;

    if (isOverdue) {
      color = theme.color.GRAY_600;
    } else {
      color = theme.color[hasPrediction ? 'PURPLE_300' : 'GRAY_300'];
    }

    return `
      border: 1px solid ${color};

      & .form-predict {
        background-color: ${color};
      }
      
      & > header, & > div > div {
        border-color: ${color};
      }

      
      ${
        isOverdue &&
        `
          & .info-predict {
            position: relative;

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.15);
            }
          }
        `
      }
    `;
  }}

  ${({ css }) => css || ''}
`;

const Header = styled.header`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(10, 20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_300};
  font-weight: 600;
  font-size: ${pxToRem(16)};

  & > svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
  }
`;

function PredictWrapper({
  css,
  all,
  icon: Icon,
  category,
  predictionValue,
  endDate,
  children
}: Props) {
  return (
    <Wrapper
      css={css}
      hasPrediction={!!predictionValue}
      isOverdue={Date.now() > endDate}
    >
      {all && (
        <Header>
          {Icon && <Icon />}
          {category}
        </Header>
      )}
      {children}
    </Wrapper>
  );
}

export default React.memo(PredictWrapper);
