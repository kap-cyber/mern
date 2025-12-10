import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { RegisterProvider } from './Context/contextRegister';
import { LoginProvider } from './Context/contextLogin';
import { BrowserRouter } from 'react-router-dom';
import { OtpProvider } from './Context/contextOtp';
import { AuthProvider } from './Context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <OtpProvider>
    <LoginProvider>
    <RegisterProvider>
    <App />
  </RegisterProvider>
  </LoginProvider>
  </OtpProvider>
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
