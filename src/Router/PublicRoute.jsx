import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth/pages/context/AuthContext";

const PublicRoute = ({ children }) => {

  // Traemos del context el value "logged" para saber si el usuario esta logeado o no
  const { logged } = useContext(AuthContext);

  // Esto seria como un condicional
  // Si no esta logeado te muestra los children, sino te manda a la pag de todos los heroes
  return !logged ? children : <Navigate to="/" />;
};

export default PublicRoute;
