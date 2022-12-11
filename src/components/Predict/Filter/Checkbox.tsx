import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg';
import useCheckbox from './hooks/useCheckbox';

interface Props {
  id: string;
  category: string;
  content: string;
}

const Container = styled.button<{ checked: boolean }>`
  ${({ theme }) => theme.mixin.flex()}
  padding: ${pxToRem(0, 20)};
  margin-bottom: ${pxToRem(30)};
  font-size: ${pxToRem(16)};

  &:hover > span {
    background-color: ${({ theme }) => theme.color.PURPLE_50};
  }

  &:active > span {
    background-color: ${({ theme }) => theme.color.PURPLE_100};
  }

  ${({ checked, theme }) =>
    checked &&
    `
      & > span {
        border-color: ${theme.color.PURPLE_500};
      }

      & > span > svg {
        display: block;
        fill: ${theme.color.PURPLE_500};
      }
    `}
`;

const IconWrapper = styled.span`
  display: inline-block;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  padding: ${pxToRem(2)};
  margin-right: ${pxToRem(10)};
  border: 1px solid ${({ theme }) => theme.color.BLACK};
  border-radius: ${pxToRem(4)};
  background-color: ${({ theme }) => theme.color.WHITE};

  & > svg {
    display: none;
    width: 100%;
    height: 100%;
  }
`;

function Checkbox({ id, category, content }: Props) {
  const { checked, handleClick } = useCheckbox(id, category);

  return (
    <Container type="button" checked={checked} onClick={handleClick}>
      <IconWrapper>
        <CheckIcon />
      </IconWrapper>
      {content}
    </Container>
  );
}

export default Checkbox;
