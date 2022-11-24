import Button, { Medium } from '@components/common/Button';
import Input from '@components/common/Form/Input';
import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';
import useSignup from './hooks/useHandleSignup';

const Container = styled.form`
  ${({ theme }) => theme.mixin.flexColumn('flex-start', 'stretch', pxToRem(10))}
  padding: ${pxToRem(0, 10, 10)};
`;

function Signup() {
  const { onSubmit, userNameRegister, emailRegister, errors } = useSignup();
  return (
    <Container onSubmit={onSubmit}>
      <Input
        id="signup-input-username"
        label="닉네임"
        placeholder="아이디를 입력하세요(한글, 영문, 숫자로 2 ~ 16자)"
        maxLength={16}
        register={userNameRegister}
        errorMessage={errors.userName?.message}
      />
      <Input
        id="signup-input-email"
        label="이메일"
        placeholder="이메일을 입력하세요"
        register={emailRegister}
        errorMessage={errors.email?.message}
      />
      <Button css={Medium} type="submit">
        회원가입
      </Button>
    </Container>
  );
}

export default Signup;
