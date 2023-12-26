import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Post from './components/post';
import SignUpForm from "./components/SignUp";
import LoginForm from "./components/loginForm";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      <div> 
    </div>
    </BrowserRouter>
    


    
  );
}

export default App;
