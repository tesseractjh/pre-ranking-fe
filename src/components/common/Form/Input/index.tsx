import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: React.ReactNode;
  errorMessage?: string;
  register?: Omit<UseFormRegisterReturn, 'onChange'>;
}

const Container = styled.div``;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin-bottom: ${pxToRem(10)};
  font-weight: 700;
  font-size: ${pxToRem(16)};

  ${({ theme }) =>
    theme.media.mobile(`
    margin-bottom: ${pxToRem(8)};
    font-size: ${pxToRem(14)};
  `)}
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: ${pxToRem(6, 10)};
  border: 2px solid
    ${({ hasError, theme }) => theme.color[hasError ? 'RED_400' : 'GRAY_400']};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(18)};

  &::placeholder {
    font-size: ${pxToRem(16)};
  }

  ${({ theme }) =>
    theme.media.mobile(`
    font-size: ${pxToRem(14)};

    &::placeholder {
      font-size: ${pxToRem(13)};
    }
  `)}
`;

const ErrorMessage = styled.strong`
  ${({ theme }) => theme.mixin.inlineFlex('flex-start')}
  width: 100%;
  height: ${pxToRem(14)};
  margin-top: ${pxToRem(4)};
  font-weight: 600;
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.color.RED_500};

  ${({ theme }) =>
    theme.media.mobile(`
    height: ${pxToRem(12)};
    font-size: ${pxToRem(12)};
  `)}
`;

function Input({ id, label, errorMessage, register, ...props }: Props) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        spellCheck={false}
        autoComplete="off"
        {...props}
        {...register}
        hasError={!!errorMessage}
      />
      <ErrorMessage>{errorMessage ?? ''}</ErrorMessage>
    </Container>
  );
}

export default Input;
