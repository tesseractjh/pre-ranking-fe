import styled from 'styled-components';
import LayoutWithNavBar from '@components/common/LayoutWithNavBar';
import ComponentLoading from '@components/common/Fallback/Loading/ComponentLoading';
import pxToRem from '@utils/pxToRem';
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_TABLET,
  SUB_HEADER_HEIGHT_TABLET
} from '@constants/style';
import { NAV_BAR_LIST } from '@constants/navBar';
import Breadcrumb from './Breadcrumb';
import Coin from './Coin';

const Sticky = styled.div`
  ${({ theme }) => theme.mixin.flex('space-between')}
  position: sticky;
  top: ${pxToRem(HEADER_HEIGHT)};
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_300};
  margin-bottom: ${pxToRem(20)};
  background-color: ${({ theme }) => theme.color.WHITE};

  ${({ theme }) =>
    theme.media.tablet(`
      top: ${pxToRem(HEADER_HEIGHT_TABLET + SUB_HEADER_HEIGHT_TABLET)};
  `)}
`;

function MenuLayout() {
  return (
    <LayoutWithNavBar
      navBarContent={NAV_BAR_LIST}
      suspenseFallback={<ComponentLoading />}
      componentBeforeOutlet={
        <Sticky>
          <Breadcrumb />
          <Coin />
        </Sticky>
      }
    />
  );
}

export default MenuLayout;
