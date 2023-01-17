import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const onLogin = () => {
    // Para poder hacer el dispatch
    login("Guido Morabito");

    // Una vez que pasa el login te manda a la pag principal
    navigate("/", {replace: true})
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
