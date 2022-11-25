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
  try {
    const { data } = await instance.get<boolean>(
      `/user_name?value=${userName}`
    );
    return data;
  } catch {
    alert('서버 에러!');
    return false;
  }
};

export const checkDuplicateEmail = async (email: string) => {
  try {
    const { data } = await instance.get<boolean>(`/email?value=${email}`);
    return data;
  } catch {
    alert('서버 에러!');
    return false;
  }
};
