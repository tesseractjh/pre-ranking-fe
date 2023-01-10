import { Route, Routes } from 'react-router-dom';
import StockFluctuation from '@components/Predict/Stock/StockFluctuation';
import PredictAll from '@components/Predict/PredictAll';
import NotFound from '@components/common/Fallback/Error/NotFound';
import Preparation from '@components/common/Fallback/Error/Preparation';
import PredictionDetail from '@components/Predict/PredictionDetail';
import StockPrice from '@components/Predict/Stock/StockPrice';

function PredictPage() {
  return (
    <Routes>
      <Route path="all" element={<PredictAll />} />
      <Route path="stock_fluctuation" element={<StockFluctuation />} />
      <Route path="stock_price" element={<StockPrice />} />
      <Route path="lotto" element={<Preparation />} />
      <Route path="detail/:id" element={<PredictionDetail />} />
      <Route path="*" element={<NotFound fullScreen={false} />} />
    </Routes>
  );
}

export default PredictPage;
