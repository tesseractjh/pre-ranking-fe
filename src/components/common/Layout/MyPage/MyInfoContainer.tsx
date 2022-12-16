import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props {
  icon: SVGIcon;
  title: string;
  children: React.ReactNode;
}

const Title = styled.h2`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding: ${pxToRem(20, 10)};
  margin-bottom: ${pxToRem(10)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  font-weight: 700;
  font-size: ${pxToRem(24)};

  & > svg {
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    margin-right: ${pxToRem(12)};
  }
`;

const Container = styled.div`
  padding-bottom: ${pxToRem(40)};
`;

function MyInfoContainer({ icon: Icon, title, children }: Props) {
  return (
    <>
      <Title>
        <Icon />
        {title}
      </Title>
      <Container>{children}</Container>
    </>
  );
}

export default MyInfoContainer;
