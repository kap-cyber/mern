import { createContext, useReducer, useContext,useState } from 'react';
import { otpReducer,initialState } from '../reducers/otpReducer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Context/authContext';

const OtpContext=createContext();

const Send_URL="http://localhost:5001/api/auth/send-otp";
const Verify_URL="http://localhost:5001/api/auth/verify-otp";

export const OtpProvider=({children})=>{
    const navigate=useNavigate();
    const {login}=useAuth();
      const [state, dispatch] = useReducer(otpReducer, initialState);      
      const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
             const response=await axios.post(Send_URL,{email:state.email},
                {
                    headers:{
                       'Content-Type':'application/json' 
                    },
                }
             );
             navigate("/otp-verify");
      }catch(error){
        console.log(error);
      }
    }
    const handleVerifyOtp=async(e)=>{
         e.preventDefault();
         const otp_Data={
        email:state.email,
        otp:(state.otp).toString()
      }
      console.log(otp_Data);
         try{
             const response=await axios.post(Verify_URL,otp_Data,
                {
                    headers:{
                       'Content-Type':'application/json' 
                    },
                }
             );
             if(response.status===200){
                login(response.data.token);
                navigate("/");
             }
             
      }catch(error){
        console.log(error);
      }
    }
    
     return(
        <OtpContext.Provider value={{state,dispatch,handleSubmit,handleVerifyOtp}}>
         {children}
        </OtpContext.Provider>
     )

}
export const useOtp = () => {
  const context = useContext(OtpContext);
  if (!context) {
    console.log('wrap the app cmp');
  }
  return context;
};

