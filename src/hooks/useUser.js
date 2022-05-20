import { registerUser } from "api/queries/user";
import { useMutation } from "react-query";

// const key = "user";

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

// export const useEmployees = ({ search = "", page = 1, role, sort }) => {
//   const school = useSelector((state) => state.auth.school);

//   const params = { ...sort, search: search, page, role, school: school._id };

//   return useQuery([key, { page, role }], () => getEmployees(params), {
//     refetchOnWindowFocus: false,
//   });
// };
