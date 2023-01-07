import type { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends InputHTMLAttributes<HTMLInputElement>, CustomCSS {
  hasError?: boolean;
  register?: Omit<UseFormRegisterReturn, 'onChange'>;
}

const StyledInput = styled.input<CustomCSS & { hasError?: boolean }>`
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

  ${({ css }) => css || ''}
`;

function Input({ css, hasError, register, ...props }: Props) {
  return (
    <StyledInput
      css={css}
      spellCheck={false}
      autoComplete="off"
      hasError={hasError}
      {...props}
      {...register}
    />
  );
}

export default Input;
