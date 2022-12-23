import { authInstance, axiosInstance } from '@configs/axios';

export const getMyRank = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{ rank: Model.UserRank }>
  >('/rank/mypage', { params });
  return data;
};

export const getRank = async (params: Params) => {
  const { data } = await axiosInstance.get<
    APIResponse<{ total_user_count: number; ranks: Model.Rank[] }>
  >('/rank', { params });
  return data;
};
