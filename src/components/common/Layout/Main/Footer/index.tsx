import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

const Container = styled.footer`
  ${({ theme }) => theme.mixin.flexColumn('center', 'stretch')}
  height: ${pxToRem(80)};
  margin-top: ${pxToRem(40)};
  border-top: 1px solid ${({ theme }) => theme.color.GRAY_200};
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK};
  text-align: center;

  & > span {
    padding-top: 0;
  }

  ${({ theme }) =>
    theme.media.mobile(`
      height: ${pxToRem(60)};
  `)}
`;

const Small = styled.small`
  font-size: ${pxToRem(14)};

  ${({ theme }) =>
    theme.media.mobile(`
      font-size: ${pxToRem(12)};
  `)}
`;

function Footer() {
  return (
    <Container>
      <Logo size="sm" />
      <Small>© 2022. Pre-Ranking All Rights Reserved.</Small>
    </Container>
  );
}

export default Footer;
