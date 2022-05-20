import axios from "axios";

const dojoApi = axios.create({
  // baseURL: "http://localhost:4000/api/v1",
  baseURL: "http://ec2-3-224-28-91.compute-1.amazonaws.com:4000/api/v1",
});

// dojoApi.interceptors.request.use(async (config) => {
//   const session = await getSession();

//   if (session) {
//     config.headers.Authorization = `Bearer ${session.accessToken}`;
//   }

//   return config;
// });

export default dojoApi;
