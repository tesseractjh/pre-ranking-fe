import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import Input from '.';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: React.ReactNode;
  errorMessage?: string;
  register?: Omit<UseFormRegisterReturn, 'onChange'>;
}

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

function FormInput({ id, label, errorMessage, register, ...props }: Props) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} register={register} hasError={!!errorMessage} />
      <ErrorMessage>{errorMessage ?? ''}</ErrorMessage>
    </div>
  );
}

export default FormInput;
