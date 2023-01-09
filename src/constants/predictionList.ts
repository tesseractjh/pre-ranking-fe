import { ReactComponent as EconomyIcon } from '@assets/icons/predict/economy.svg';
import { ReactComponent as StockIcon } from '@assets/icons/predict/stock.svg';
import { ReactComponent as SportsIcon } from '@assets/icons/predict/sports.svg';
import { ReactComponent as SoccerIcon } from '@assets/icons/predict/soccer.svg';
import { ReactComponent as ESportsIcon } from '@assets/icons/predict/esports.svg';
import { ReactComponent as MediaIcon } from '@assets/icons/predict/media.svg';
import { ReactComponent as MovieIcon } from '@assets/icons/predict/movie.svg';
import { ReactComponent as ETCIcon } from '@assets/icons/predict/etc.svg';
import { ReactComponent as LottoIcon } from '@assets/icons/predict/lotto.svg';
import type { Predict } from '../components/Home/types/predict';

const PREDICTION_LIST: { icon: SVGIcon; title: string; predicts: Predict[] }[] =
  [
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
          status: 'active'
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
      icon: ESportsIcon,
      title: 'e스포츠',
      predicts: [
        {
          icon: ESportsIcon,
          content: 'LoL 경기 승패',
          link: 'lol_result',
          status: 'inactive'
        }
      ]
    },
    {
      icon: MediaIcon,
      title: '미디어',
      predicts: [
        {
          icon: MovieIcon,
          content: '영화 누적 관객수',
          link: 'movie_audience',
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

export const PREDICTION_CATEGORIES = PREDICTION_LIST.map(
  ({ predicts }) => predicts
).flat();

export default PREDICTION_LIST;
