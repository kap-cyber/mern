import React from "react";
import { useEffect } from "react";
import { useLogin } from '../Context/contextLogin';
import { NavLink } from 'react-router-dom';
const Logout=()=>{
    const {logout}=useLogin();
useEffect(()=>{
  logout();
},[]) 
   return(
<>
      <NavLink
            to="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 hover: transition">
            Login
      </NavLink>
</>
   );
}
export default Logout;