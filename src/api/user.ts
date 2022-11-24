import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/user`,
  withCredentials: true
});

export const getAccessToken = async () => {
  const { data } = await instance.get<{ accessToken: string }>('/login');
  return data;
};

export const signup = async (params: Params) => {
  const { data } = await instance.patch<boolean>('/signup', params);
  return data;
};

export const checkDuplicateUserName = async (userName: string) => {
  const { data } = await instance.get<boolean>(`/user_name?value=${userName}`);
  return data;
};

export const checkDuplicateEmail = async (email: string) => {
  const { data } = await instance.get<boolean>(`/email?value=${email}`);
  return data;
};
