import { authInstance } from '@configs/axios';

export const getPredictions = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{
      predictions: Model.PredictionDetail[];
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

export const getPredictionCount = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{ count: Model.PredictionCount }>
  >('/prediction/count', { params });
  return data;
};

export const getPredictionRecords = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{ predictions: Model.PredictionRecord[] }>
  >('/prediction/record', {
    params
  });
  return data;
};

export const getPredictionDetail = async (params: Params) => {
  const { id } = params;
  const { data } = await authInstance.get<
    APIResponse<{ prediction: Model.PredictionDetail }>
  >(`/prediction/detail/${id}`);
  return data;
};
