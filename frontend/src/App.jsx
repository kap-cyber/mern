// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Deals from './Components/Deals';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Admin from './Security/Admin';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Signup from './Components/Signup';
import Otp_Login from './Components/Otp_Login';
import Otp_Verify from './Components/Otp_verify';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    
    
      <Navbar/>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/deals" element={<Deals/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/logout" element={<Logout/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/send-otp" element={<Otp_Login/>}/>
        <Route path="/otp-verify" element={<Otp_Verify/>}/>
      </Routes>
      </main>
      <Footer/>
      </div>
    
    <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
