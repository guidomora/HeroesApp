import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/pages/context/AuthContext";

// Le ponemos children pq es un high order component

const PrivateRoute = ({ children }) => {
  // Traemos del context el value "logged" para saber si el usuario esta logeado o no
  const { logged } = useContext(AuthContext);
//   -----------------------------------------------------------

// propiedades desestructuradas del useLocation
const {pathname, search} = useLocation()
const lastPath = pathname + search;
localStorage.setItem("lastPath", lastPath)


  // Esto seria como un condicional
  // Si esta logeado te muestra los children, sino te manda a la pag de login
  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
