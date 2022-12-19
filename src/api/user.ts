import { authInstance, axiosInstance } from '@configs/axios';

export const getUserInfo = async () => {
  const { data } = await authInstance.get<APIResponse<{ user: Model.User }>>(
    '/user'
  );
  return data;
};

export const getAccessToken = async () => {
  const { data } = await axiosInstance.get<
    APIResponse<{ accessToken: string }>
  >('/user/signin');
  return data;
};

export const signin = async (params: Params) => {
  try {
    const { data } = await axiosInstance.post<
      APIResponse<{ isSuccess: boolean }>
    >('/user/signin/redirect', params);
    return data?.isSuccess;
  } catch {
    alert('잘못된 요청입니다!');
    return false;
  }
};

export const signup = async (params: Params) => {
  const { data } = await axiosInstance.patch<{ isSuccess: boolean }>(
    '/user/signup',
    params
  );
  return data;
};

export const signout = async () => {
  const { data } = await axiosInstance.post('/user/signout');
  return data;
};

export const checkDuplicateUserName = async (userName: string) => {
  try {
    const { data } = await axiosInstance.get<{ hasDuplicate: boolean }>(
      `/user/user_name?value=${userName}`,
      { timeout: 2000 }
    );
    return data?.hasDuplicate;
  } catch {
    alert('서버 에러!');
    return false;
  }
};

export const checkDuplicateEmail = async (email: string) => {
  try {
    const { data } = await axiosInstance.get<{ hasDuplicate: boolean }>(
      `/user/email?value=${email}`,
      { timeout: 2000 }
    );
    return data?.hasDuplicate;
  } catch {
    alert('서버 에러!');
    return false;
  }
};
