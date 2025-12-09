import { createContext, useReducer, useContext,useState } from 'react';
import { loginReducer, initialState } from '../reducers/loginReducer';
import axios from 'axios';



const LoginContext = createContext();

const URL="http://localhost:5000/api/auth/login";

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   
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
          localStorage.setItem('token',response.data.token);
          setIsLoggedIn(true);
        }else{
          //error code
        }
      } catch (error) {
        console.error(error);
      }
      
    }
    const logout=()=>{
     localStorage.removeItem("token");
     setIsLoggedIn(false);
     
  }
  return (
    <LoginContext.Provider value={{ state, dispatch,handleSubmit,logout,isLoggedIn }}>
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
