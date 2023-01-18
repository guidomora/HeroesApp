import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {

  // Si el lasPath es nulo devuelve  "/" que es lo que tomaria el navigate mas abajo
    const lastPath = localStorage.getItem("lastPath") || "/"


    // Para poder hacer el dispatch
    login("User");

    // Una vez que pasa el login te manda a la pag principal
    // navigate("/", {replace: true})

    // navigate actualizado para recordar la ultima pagiona visitada
    navigate(lastPath, {replace: true})
  }


  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>Login</button>
    </div>
  )
}
export default LoginPage
