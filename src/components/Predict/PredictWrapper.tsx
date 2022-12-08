import pxToRem from '@utils/pxToRem';
import styled from 'styled-components';

interface Props extends CustomCSS {
  all?: boolean;
  icon?: SVGIcon;
  category?: string;
  children: React.ReactNode;
}

const Wrapper = styled.li<CustomCSS>`
  overflow: hidden;
  margin-bottom: ${pxToRem(40)};
  border-radius: ${pxToRem(10)};
  border: 1px solid ${({ theme }) => theme.color.GRAY_300};
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ css }) => css || ''}
`;

const Header = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(10, 20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_300};
  font-weight: 600;
  font-size: ${pxToRem(16)};

  & > svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
  }
`;

function PredictWrapper({ css, all, icon: Icon, category, children }: Props) {
  return (
    <Wrapper css={css}>
      {all && (
        <Header>
          {Icon && <Icon />}
          {category}
        </Header>
      )}
      {children}
    </Wrapper>
  );
}

export default PredictWrapper;
