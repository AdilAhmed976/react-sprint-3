import React, { useContext } from "react";
import{ Link, Navigate, useNavigate }from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;
 

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext)
  const navigate = useNavigate()
const handleLogin = ()=>{
  if (isAuth) {
    logout()
    navigate('/')
  }
  else {
    navigate('/login')
  }

  
}

  return (
    <div data-cy="navbar">
   
      <Link to='' data-cy="navbar-home-link">LOGO</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button">{isAuth ? "logout" : "login"}</button>
    </div>
  );
};

export default Navbar;
