import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

import { LoginPage } from "pages/auth/LoginPage";
import { MainPage } from "pages/MainPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "pages/auth/RegisterPage";
import { useEffect, useState } from "react";
import axios from "axios";

export const RouterApp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!accessToken) return;
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setLoggedIn(true);
  }, [accessToken]);

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PublicRoute loggedIn={!loggedIn} />}>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="register"
            element={<RegisterPage setLoggedIn={setLoggedIn} />}
          />
        </Route>
        <Route path="/" element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route index element={<MainPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
