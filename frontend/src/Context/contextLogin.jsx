import { createContext, useReducer, useContext,useState } from 'react';
import { loginReducer, initialState } from '../reducers/loginReducer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Context/authContext';


const LoginContext = createContext();

const URL="http://localhost:5001/api/auth/login";

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
     const navigate = useNavigate();
     const {login}=useAuth();
   
   const loginData={
     email:state.email,
     password:state.password
    }
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(URL,loginData,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        if(response.status===200){
          login(response.data.token);
        }else{
          //error code
        }
      } catch (error) {
        console.error(error);
      }
      
    }
  return (
    <LoginContext.Provider value={{ state, dispatch,handleSubmit }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    console.log('wrap the app cmp');
  }
  return context;
};
