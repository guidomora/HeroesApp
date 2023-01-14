import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const onLogin = () => {
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