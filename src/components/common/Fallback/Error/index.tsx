import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props extends CustomCSS {
  icon: SVGIcon;
  title: string;
  content: string;
  fullScreen?: boolean;
  children?: React.ReactNode;
}

const Container = styled.div<{ fullScreen: boolean } & CustomCSS>`
  ${({ theme }) => theme.mixin.flexColumn()}
  width: ${({ fullScreen }) => (fullScreen ? '100vw' : '100%')};
  height: ${({ fullScreen }) => (fullScreen ? '100vh' : pxToRem(400))};
  font-size: ${pxToRem(16)};
  color: ${({ theme }) => theme.color.GRAY_400};
  text-align: center;

  & > svg {
    width: ${pxToRem(60)};
    height: ${pxToRem(60)};
    margin-bottom: ${pxToRem(30)};
    fill: ${({ theme }) => theme.color.PURPLE_600};
  }

  ${({ css }) => css || ''}
`;

const Title = styled.h1`
  margin-bottom: ${pxToRem(20)};
  font-weight: 700;
  font-size: ${pxToRem(36)};
  color: ${({ theme }) => theme.color.BLACK};
`;

function Error({
  css,
  icon: Icon,
  title,
  content,
  fullScreen = true,
  children
}: Props) {
  return (
    <Container css={css} fullScreen={fullScreen}>
      <Icon />
      <Title>{title}</Title>
      {content}
      {children}
    </Container>
  );
}

export default Error;
