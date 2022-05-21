import dojoApi from "api";

export const getUser = async (params) => {
  const { data } = await dojoApi.get("/user/get-user", { params });
  return data;
};
export const registerUser = async (info) => {
  const { data } = await dojoApi.post("/user/register-user", info);
  return data;
};
export const loginUser = async (info) => {
  const { data } = await dojoApi.post("/user/login-user", info);
  return data;
};
