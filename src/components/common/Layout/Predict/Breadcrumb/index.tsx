import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useBreadcrumb from './hooks/useBreadcrumb';
import Chevron from './Chevron';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  position: sticky;
  top: ${pxToRem(60)};
  height: ${pxToRem(65)};
  padding: ${pxToRem(0, 10)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_300};
  margin-bottom: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.color.WHITE};
  font-size: ${pxToRem(22)};

  ${({ theme }) =>
    theme.media.tablet(`
      top: ${pxToRem(50)};
      height: ${pxToRem(45)};
      font-size: ${pxToRem(16)};
  `)}
`;

const Strong = styled.strong`
  font-weight: 700;
`;

function Breadcrumb() {
  const breadcrumbs = useBreadcrumb();

  return (
    <Container>
      {breadcrumbs.map((breadcrumb, index) => {
        if (index === breadcrumbs.length - 1) {
          return <Strong key={breadcrumb}>{breadcrumb}</Strong>;
        }
        return (
          <React.Fragment key={breadcrumb}>
            {breadcrumb}
            <Chevron />
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Breadcrumb;
