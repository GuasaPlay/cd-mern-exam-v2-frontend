import dojoApi from "api";

export const registerUser = async (info) => {
  const { data } = await dojoApi.post("/user/register-user", info);
  return data;
};
