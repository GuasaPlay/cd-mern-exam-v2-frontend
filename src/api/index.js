import axios from "axios";

const dojoApi = axios.create({
  // baseURL: "http://localhost:4000/api/v1",
  baseURL: "https://codingdojo.ticsga.com/api/v1",
});

// dojoApi.interceptors.request.use(async (config) => {
//   const session = await getSession();

//   if (session) {
//     config.headers.Authorization = `Bearer ${session.accessToken}`;
//   }

//   return config;
// });

export default dojoApi;
