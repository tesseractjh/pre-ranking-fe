import { authInstance } from '@configs/axios';

export const getNotifications = async (params: Params) => {
  const { data } = await authInstance.get<
    APIResponse<{ notifications: Model.Notification[] }>
  >('/notification', { params });
  return data;
};

export const deleteNotification = async (params: MutationParams) => {
  const { body } = params;
  const { data } = await authInstance.delete<
    APIResponse<{ isSuccess: boolean }>
  >(`/notification/${body}`);
  return data;
};

export const deleteAllNotifications = async () => {
  const { data } = await authInstance.delete<
    APIResponse<{ isSuccess: boolean }>
  >('notification');
  return data;
};
