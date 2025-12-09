import React,{createContext,useReducer,useContext} from 'react';
import { initialState,registerReducer } from '../reducers/registerReducer';
import axios from 'axios';



const RegisterContext = createContext();
const URL="http://localhost:5000/api/auth/register";

export const RegisterProvider = ({children})=>{

    const [state,dispatch]=useReducer(registerReducer,initialState);
    const  formData={
    full_name:state.fullname,
    email:state.email,
    phone_number:state.phone,
    password:state.password,
}
    const handleSubmit=async(e)=>{
      //  e.preventDefault();

   try {
     const response = await axios.post(URL,formData,{
        headers:{
            'Content-Type':'application/json'
        }
     });
   } catch (error) {
    console.log(error);
   }
   
    
};
      return (
      <RegisterContext.Provider value={{state,dispatch,handleSubmit}}>
        {children}
      </RegisterContext.Provider>
      );

}
export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
};



