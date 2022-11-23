import styled, { css } from 'styled-components';
import GoogleLoginImage from '@assets/images/google_login.png';
import KakaoLoginImage from '@assets/images/kakao_login.png';
import pxToRem from '@utils/pxToRem';

const Container = styled.ul`
  ${({ theme }) =>
    theme.mixin.flexColumn('space-between', 'center', pxToRem(10))}
`;

const LoginButton = styled.a<CustomCSS>`
  display: inline-block;
  width: 250px;
  height: 62px;

  & > img {
    width: 100%;
    height: 60px;
    object-fit: cover;
  }

  ${({ css }) => css || ''}
`;

const KakaoLoginButtonStyle = css`
  padding: ${pxToRem(4)};

  & > img {
    height: 52px;
  }
`;

function Login() {
  return (
    <Container>
      <LoginButton
        href={`${import.meta.env.VITE_API_URL}/auth/kakao`}
        css={KakaoLoginButtonStyle}
      >
        <img src={KakaoLoginImage} alt="카카오 로그인" />
      </LoginButton>
      <LoginButton href={`${import.meta.env.VITE_API_URL}/auth/google`}>
        <img src={GoogleLoginImage} alt="구글 로그인" />
      </LoginButton>
    </Container>
  );
}

export default Login;
