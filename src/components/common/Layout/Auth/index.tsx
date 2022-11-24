import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flexColumn()}
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: ${pxToRem(400)};
  padding: ${pxToRem(20)};
  margin-top: ${pxToRem(30)};
  border-radius: ${pxToRem(20)};
  ${({ theme }) => theme.mixin.shadow()}
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
`;

function AuthLayout({ title, children }: Props) {
  return (
    <Wrapper>
      <Logo size="lg" />
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  );
}

export default AuthLayout;
