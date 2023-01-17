import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


// Recordatorio: el provider usa al context con el objetivo de que este sea el componente
// para proveer la info a toda mi aplicacion


const initialState = {
    logged: false,
}

// Pasamos children como parametro para recibir todos los componentes hijos
const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name= "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name
      }
    }

    dispatch(action)
  }

  return (
   <AuthContext.Provider value={{
    authState,
    login: login
   }}>
        {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider