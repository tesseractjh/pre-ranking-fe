import { ReactComponent as EconomyIcon } from '@assets/icons/predict/economy.svg';
import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import { ReactComponent as ETCIcon } from '@assets/icons/predict/etc.svg';
import { ReactComponent as LottoIcon } from '@assets/icons/predict/lotto.svg';
import type { NavBarCategory } from '@components/common/NavBar/types/navBar';

export const NAV_BAR_LIST: NavBarCategory[] = [
  {
    links: [
      {
        content: '전체',
        link: 'all'
      }
    ]
  },
  {
    icon: EconomyIcon,
    content: '경제',
    links: [
      {
        icon: StockIcon,
        content: '주식',
        children: [
          {
            content: '종가 등락',
            link: 'stock_fluctuation'
          },
          {
            content: '종가',
            link: 'stock_price'
          }
        ]
      }
    ]
  },
  {
    icon: ETCIcon,
    content: '기타',
    links: [
      {
        icon: LottoIcon,
        content: '로또 당첨 번호',
        link: 'lotto'
      }
    ]
  }
];
