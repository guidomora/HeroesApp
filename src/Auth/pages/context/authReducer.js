import { types } from "../types/types";

// desestructuramos el estado (con el spread) porque no sabemos si mas adelante se agregan
// propiedades al estado y solo reemplazamos lo que nos interesa

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
