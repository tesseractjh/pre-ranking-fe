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
  width: ${pxToRem(250)};
  height: ${pxToRem(60)};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) =>
    theme.media.mobile(`
      width: ${pxToRem(200)};
      height: ${pxToRem(48)};
  `)}

  ${({ css }) => css || ''}
`;

const KakaoLoginButtonStyle = css`
  padding: ${pxToRem(4)};

  & > img {
    height: ${pxToRem(52)};
  }

  ${({ theme }) =>
    theme.media.mobile(`
    padding: ${pxToRem(3)};

    & > img {
      height: ${pxToRem(42)};
    }
  `)}
`;

function Login() {
  return (
    <Container>
      <LoginButton
        href={`${import.meta.env.VITE_SERVER_URL}/auth/kakao`}
        css={KakaoLoginButtonStyle}
      >
        <img src={KakaoLoginImage} alt="카카오 로그인" />
      </LoginButton>
      <LoginButton href={`${import.meta.env.VITE_SERVER_URL}/auth/google`}>
        <img src={GoogleLoginImage} alt="구글 로그인" />
      </LoginButton>
    </Container>
  );
}

export default Login;
