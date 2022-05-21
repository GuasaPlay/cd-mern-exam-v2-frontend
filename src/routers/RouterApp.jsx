import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { LoginPage } from "pages/auth/LoginPage";
import { MainPage } from "pages/MainPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RegisterPage } from "pages/auth/RegisterPage";
import { useEffect, useState } from "react";

export const RouterApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) setLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PublicRoute loggedIn={!loggedIn} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<MainPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
