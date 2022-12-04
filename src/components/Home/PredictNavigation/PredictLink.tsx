import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HoverInactive, Large } from '@components/common/Button';
import pxToRem from '@utils/pxToRem';
import type { Predict } from '../types/predict';

const Container = styled(Link)<{ $css: CustomCSS['css'] }>`
  ${({ theme }) => theme.mixin.inlineFlex()}

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.WHITE};
  }

  ${({ $css }) => $css || ''}
`;

const InactiveStyle = css`
  background-color: ${({ theme }) => theme.color.GRAY_400};

  &:hover {
    background-color: ${({ theme }) => theme.color.GRAY_400};
  }
`;

const ResponsiveStyle = css`
  ${({ theme }) =>
    theme.media.mobile(`
      height: ${pxToRem(60)};
      border-radius: 0;
      font-size: ${pxToRem(22)};

      & > svg {
        width: ${pxToRem(18)};
        height: ${pxToRem(18)};
        margin-right: ${pxToRem(12)};
      }

      &:not(:last-child) {
        border-bottom: 1px solid ${theme.color.GRAY_300};
      }
  `)}
`;

function PredictLink({ icon: Icon, content, link, status }: Predict) {
  if (status === 'active') {
    return (
      <Container to={`/predict/${link}`} $css={[Large, ResponsiveStyle]}>
        <Icon />
        {content}
      </Container>
    );
  }

  return (
    <Container
      as="button"
      $css={[
        Large,
        HoverInactive(status === 'inactive' ? '준비중' : '종료'),
        InactiveStyle,
        ResponsiveStyle
      ]}
    >
      <Icon />
      {content}
    </Container>
  );
}

export default PredictLink;
