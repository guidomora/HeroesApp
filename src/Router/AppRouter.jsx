import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Auth/pages/LoginPage";
import HeroesRoutes from "../Heroes/routes/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element= {
        <PublicRoute>
          <LoginPage />
        </PublicRoute>}
        />


        {/* PrivateRoutes (contiene la validacion) envuelve a HeroesRoutes para que no se
        pueda acceder sin la validacion */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
