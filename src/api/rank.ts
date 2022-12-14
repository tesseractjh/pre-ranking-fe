import { authInstance } from '@configs/axios';

export const getMyRank = async (params: Params) => {
  const { data } = await authInstance.get<APIResponse<{ rank: Model.Rank }>>(
    '/rank',
    { params }
  );
  return data;
};
