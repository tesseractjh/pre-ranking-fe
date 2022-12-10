import { authInstance } from '@configs/axios';

export const getNotifications = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{ notifications: Model.Notification[] }>
  >('/notification', { params });
  return data;
};

export const deleteNotification = async (params: MutationParams) => {
  const { param } = params;
  const { data } = await authInstance.delete<APIResponse<MutationResponse>>(
    `/notification/${param}`
  );
  return data;
};

export const deleteAllNotifications = async () => {
  const { data } = await authInstance.delete<APIResponse<MutationResponse>>(
    'notification'
  );
  return data;
};
