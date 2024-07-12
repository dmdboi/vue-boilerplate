import { axiosInstance, publicAxiosInstance, setAxiosAuth } from "../client";

async function getAuthRedirect(): Promise<any> {
  return (await publicAxiosInstance.get(`v1/auth/redirect`)).data;
}

async function getAuthToken(code: string): Promise<{
  token: string;
  is_signup?: boolean;
}> {
  const response = (await publicAxiosInstance.get(`v1/auth/token?code=${code}`)).data;

  localStorage.setItem("token", "");
  localStorage.setItem("token", response.token.token);
  setAxiosAuth();
  return {
    token: response.token.token,
    is_signup: response.is_signup,
  };
}

async function getUser(): Promise<any> {
  return (await axiosInstance.get(`v1/auth/me`)).data;
}

export default {
  getAuthRedirect,
  getAuthToken,
  getUser
};
