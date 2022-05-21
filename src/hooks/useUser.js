import { getUser, loginUser, registerUser } from "api/queries/user";
import { useMutation, useQuery } from "react-query";

const key = "user";

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};

export const useGetUser = () => {
  return useQuery([key], () => getUser(), {
    refetchOnWindowFocus: false,
    retry: false,
  });
};
