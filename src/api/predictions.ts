import { authInstance } from '@configs/axios';

export const getPredictions = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{
      predictions: (Model.Prediction &
        Omit<Model.StockFluctuation, 'info_id' | 'created_at'> & {
          participant_count: number;
          prediction_value: string;
        })[];
    }>
  >('/prediction', { params });
  return data;
};

export const postUserPrediction = async (params: Params) => {
  const { body } = params;
  const { data } = await authInstance.post<APIResponse<MutationResponse>>(
    '/prediction',
    body
  );
  return data;
};
