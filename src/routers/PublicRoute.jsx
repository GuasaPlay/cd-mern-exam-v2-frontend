import { AuthLayout } from "layouts/AuthLayout";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ loggedIn }) => {
  return loggedIn ? <AuthLayout /> : <Navigate to="/" />;
};
