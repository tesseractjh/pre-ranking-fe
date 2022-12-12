import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import type { NavBarCategory } from './types/navBar';
import { isGroup } from './types/navBar';
import NavBarGroup from './NavBarGroup';
import NavBarLink from './NavBarLink';

const Container = styled.li`
  padding: ${pxToRem(0, 0, 16, 10)};

  &:not(:first-of-type) {
    padding-top: ${pxToRem(16)};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_100};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      padding: ${pxToRem(0, 0, 10, 0)};  

      &:not(:first-of-type) {
        padding-top: ${pxToRem(10)};
      }
  `)}
`;

const Title = styled.strong`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')}
  width: 100%;
  margin-bottom: ${pxToRem(20)};
  font-weight: 700;
  font-size: ${pxToRem(18)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
  }

  ${({ theme }) =>
    theme.media.tablet(`
      padding-left: ${pxToRem(10)};  
  `)}
`;

function Category({ icon: Icon, content, links }: NavBarCategory) {
  return (
    <Container>
      {content && (
        <Title>
          {Icon && <Icon />}
          {content}
        </Title>
      )}
      {links.map((props) =>
        isGroup(props) ? (
          <NavBarGroup key={props.content} {...props} />
        ) : (
          <NavBarLink key={props.content} {...props} />
        )
      )}
    </Container>
  );
}

export default Category;
