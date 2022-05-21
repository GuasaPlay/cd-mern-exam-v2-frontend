import { useGetUser } from "hooks/useUser";
import { DefaultLayout } from "layouts/DefaultLayout";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

export const PrivateRoute = () => {
  const { data, isSuccess, isLoading } = useGetUser();

  useEffect(() => {
    if (!data) return;
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <ScaleLoader
          color="#0284C7"
          height={50}
          width={8}
          radius={8}
          margin={4}
        />
      </div>
    );
  }

  return isSuccess ? <DefaultLayout /> : <Navigate to="/auth/login" />;
};
