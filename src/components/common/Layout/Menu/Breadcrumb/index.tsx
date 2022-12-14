import React from 'react';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import useBreadcrumb from './hooks/useBreadcrumb';
import Chevron from './Chevron';

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  height: ${pxToRem(65)};
  padding: ${pxToRem(0, 10)};
  font-size: ${pxToRem(22)};

  ${({ theme }) =>
    theme.media.tablet(`
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
