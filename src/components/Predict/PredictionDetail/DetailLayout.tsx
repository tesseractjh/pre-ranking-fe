import styled from 'styled-components';
import pxToRem from '@utils/pxToRem';

interface Props {
  icon: SVGIcon;
  title: string;
  children: React.ReactNode;
}

const Title = styled.div`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  padding-bottom: ${pxToRem(10)};
  margin: ${pxToRem(30, 0, 20)};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_200};
  font-weight: 700;
  font-size: ${pxToRem(20)};

  & > svg {
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    margin-right: ${pxToRem(10)};
    fill: ${({ theme }) => theme.color.PURPLE_700};
  }
`;

function DetailLayout({ icon: Icon, title, children }: Props) {
  return (
    <>
      <Title>
        <Icon />
        {title}
      </Title>
      {children}
    </>
  );
}

export default DetailLayout;
