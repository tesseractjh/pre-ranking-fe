import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexColumn()}
  width: 100vw;
  height: 100vh;

  ${({ theme }) =>
    theme.media.mobile(`
    min-width: ${pxToRem(375)};
    padding: ${pxToRem(0, 40)};
  `)}
`;

const Container = styled.div`
  width: ${pxToRem(400)};
  padding: ${pxToRem(20)};
  margin-top: ${pxToRem(30)};
  border-radius: ${pxToRem(20)};
  ${({ theme }) => theme.mixin.shadow()}

  ${({ theme }) =>
    theme.media.mobile(`
    width: 100%;
    margin-top: ${pxToRem(20)};
    border-radius: ${pxToRem(12)};
  `)}
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixin.flex()}
  padding-bottom: ${pxToRem(10)};
  margin-bottom: ${pxToRem(30)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  font-weight: 700;
  font-size: ${pxToRem(24)};

  & > svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin-right: ${pxToRem(16)};
  }

  ${({ theme }) =>
    theme.media.mobile(`
    margin-bottom: ${pxToRem(20)};
    font-size: ${pxToRem(20)};

    & > svg {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
      margin-right: ${pxToRem(12)};
    }
  `)}
`;

function AuthLayout({ title, children }: Props) {
  return (
    <Wrapper>
      <Link to="/">
        <Logo size="lg" />
      </Link>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  );
}

export default AuthLayout;
