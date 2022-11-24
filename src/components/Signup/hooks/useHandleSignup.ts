import API from '@api/index';
import useQueryParams from '@hooks/useQueryParams';
import debounce from '@utils/debounce';
import { useForm } from 'react-hook-form';
import useHandleSignup from './useSubmit';

const USERNAME_PATTERN = /^[a-zA-ZÀ-žㄱ-힣0-9]+$/;
const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function useSignup() {
  const { email } = useQueryParams();
  const handleSignup = useHandleSignup();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: { userName: '', email },
    delayError: 300
  });

  const onSubmit = handleSubmit((data) => {
    handleSignup(data);
  });

  const userNameRegister = register('userName', {
    required: '닉네임을 입력해주세요',
    minLength: { value: 2, message: '두 글자 이상 입력해야 합니다' },
    maxLength: 16,
    pattern: {
      value: USERNAME_PATTERN,
      message: '한글, 영문, 숫자만 입력해야 합니다'
    },
    validate: {
      checkDuplicate: async (value) => {
        const hasDuplicate = await API.user.checkDuplicateUserName(value);
        return hasDuplicate || '중복된 닉네임입니다';
      }
    }
  });

  const emailRegister = register('email', {
    required: '이메일을 입력해주세요',
    pattern: {
      value: EMAIL_PATTERN,
      message: '이메일 형식에 맞게 입력해주세요'
    },
    validate: {
      checkDuplicate: async (value) => {
        const hasDuplicate = await API.user.checkDuplicateEmail(value);
        return hasDuplicate || '중복된 이메일입니다';
      }
    }
  });

  return {
    onSubmit,
    userNameRegister: {
      ...userNameRegister,
      onChange: debounce(userNameRegister.onChange, 300)
    },
    emailRegister: {
      ...emailRegister,
      onChange: debounce(emailRegister.onChange, 300)
    },
    errors
  };
}

export default useSignup;
