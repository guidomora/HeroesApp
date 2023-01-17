import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// Recordatorio: el provider usa al context con el objetivo de que este sea el componente
// para proveer la info a toda mi aplicacion

const initialState = {
  logged: false,
};

// El tercer parametro del reducer que es el inicializa el estado.
// Lectura del localStorage
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

// Pasamos children como parametro para recibir todos los componentes hijos
const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    // grabamos en el localStorage el user cuando se crea el usuario

    localStorage.setItem('user', JSON.stringify( user ) );
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
