import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home.jsx';
import Questions from './Component/Questions.jsx';
import Completed from './Component/Completed.jsx';
import Login from './Component/Login.jsx';
import SignUp from './Component/SignUp.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/complete" element={<Completed />} />
      </Routes>
    </>
  )

}
export default App; 
