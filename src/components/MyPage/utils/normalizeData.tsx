import { Link } from 'react-router-dom';
import { css } from 'styled-components';
import pxToRem from '@utils/pxToRem';
import { ReactComponent as ScoreIcon } from '@assets/icons/score.svg';
import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';
import { PREDICTION_CATEGORIES } from '@constants/predictionList';
import getResult from './getResult';
import getTypedModelAndDetail from './getTypedModelAndDetail';

const getRewardStyle = (score: number | null, coin: number | null) => css`
  ${({ theme }) => theme.mixin.flex('center', 'center', pxToRem(10))}

  ${!coin &&
  `
    & > .coin {
      display: none;
    }
  `}

  ${({ theme }) =>
    score &&
    score < 0 &&
    `
      & > .score {
        color: ${theme.color.RED_600};
      }
    `}

  & svg {
    width: ${pxToRem(12)};
    height: ${pxToRem(12)};
    margin-right: ${pxToRem(8)};
  }

  & > .score > svg {
    fill: ${({ theme }) => theme.color.PURPLE_600};
  }

  & > .coin > svg {
    fill: ${({ theme }) => theme.color.YELLOW_500};
    stroke: ${({ theme }) => theme.color.BLACK};
  }
`;

const normalizeData = (records: Model.PredictionRecord[]) =>
  records.map((record) => {
    const { typed, Detail } = getTypedModelAndDetail(record, record.category);
    const {
      prediction_id: id,
      prediction_result: result,
      coin,
      score,
      category
    } = typed;

    return {
      id,
      datas: [
        {
          value: <Link to={`/predict/detail/${id}`}>{id}</Link>
        },
        {
          value: (
            <Link to={`/predict/detail/${id}`}>
              {
                PREDICTION_CATEGORIES.find(({ link }) => link === category)
                  ?.content
              }
            </Link>
          )
        },
        { value: getResult(result) },
        {
          value:
            result !== null
              ? [
                  <span key="score" className="score">
                    <ScoreIcon />
                    {Number(score).toLocaleString('ko-kr')}
                  </span>,
                  <span key="coin" className="coin">
                    <CoinIcon />
                    {Number(coin).toLocaleString('ko-kr')}
                  </span>
                ]
              : '-',
          css: getRewardStyle(score, coin)
        }
      ],
      detail: result !== null && Detail ? <Detail record={typed} table /> : null
    };
  });

export default normalizeData;
