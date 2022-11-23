import Logo from '@components/common/Logo';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: ${pxToRem(400)};
  padding: ${pxToRem(20)};
  border-radius: ${pxToRem(20)};
  ${({ theme }) => theme.mixin.shadow()}
`;

const Title = styled.h1`
  margin-bottom: ${pxToRem(20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  text-align: center;
`;

const TitleText = styled.strong`
  display: inline-block;
  width: 100%;
  margin: ${pxToRem(40, 0, 10)};
  font-weight: 700;
  font-size: ${pxToRem(24)};
`;

function AuthLayout({ title, children }: Props) {
  return (
    <Wrapper>
      <Container>
        <Title>
          <Logo size="lg" />
          <TitleText>{title}</TitleText>
        </Title>
        {children}
      </Container>
    </Wrapper>
  );
}

export default AuthLayout;
