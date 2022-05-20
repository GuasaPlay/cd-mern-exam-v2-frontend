import { DefaultLayout } from "layouts/DefaultLayout";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ loggedIn }) => {
  return loggedIn ? <DefaultLayout /> : <Navigate to="/auth/login" />;
};
