import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {login,isAuth} = useContext(AuthContext)

  const [logincreds,setlogincreds] = useState({})

  const navigate = useNavigate()

  const onDataChange = (e) => {
    const { name,value } = e.target
    setlogincreds({
      ...logincreds,
      [name]:value
    })

  }

  const onSubmit = (e) => {
      e.preventDefault()
      login()
    navigate("/products")
  }
 
  return (
    <div>
      <form onClick={onSubmit}>
        <input onChange={onDataChange} name='email' type='email' data-cy="login-email" />
        <input onChange={onDataChange} name='password' type='password' data-cy="login-password" />
        <button   type='submit' data-cy="login-submit">Login</button>
      </form>
    </div>

  );
};

export default Login;
