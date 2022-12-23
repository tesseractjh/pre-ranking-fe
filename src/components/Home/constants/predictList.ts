import { ReactComponent as EconomyIcon } from '@assets/icons/predict/economy.svg';
import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import { ReactComponent as SportsIcon } from '@assets/icons/predict/sports.svg';
import { ReactComponent as SoccerIcon } from '@assets/icons/predict/soccer.svg';
import { ReactComponent as ETCIcon } from '@assets/icons/predict/etc.svg';
import { ReactComponent as LottoIcon } from '@assets/icons/predict/lotto.svg';
import type { Predict } from '../types/predict';

const PREDICT_LIST: { icon: SVGIcon; title: string; predicts: Predict[] }[] = [
  {
    icon: EconomyIcon,
    title: '경제',
    predicts: [
      {
        icon: StockIcon,
        content: '주식 종가 등락',
        link: 'stock_fluctuation',
        status: 'active'
      },
      {
        icon: StockIcon,
        content: '주식 종가',
        link: 'stock_price',
        status: 'inactive'
      }
    ]
  },
  {
    icon: SportsIcon,
    title: '스포츠',
    predicts: [
      {
        icon: SoccerIcon,
        content: '축구 경기 승패',
        link: 'soccer_result',
        status: 'inactive'
      },
      {
        icon: SoccerIcon,
        content: '축구 경기 득점',
        link: 'soccer_score',
        status: 'inactive'
      }
    ]
  },
  {
    icon: ETCIcon,
    title: '기타',
    predicts: [
      {
        icon: LottoIcon,
        content: '로또 당첨 번호',
        link: 'lotto',
        status: 'inactive'
      }
    ]
  }
];

export default PREDICT_LIST;
