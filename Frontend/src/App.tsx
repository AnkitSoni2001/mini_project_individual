import React from "react";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

import MyProfile from './Components/Profile/MyProfile'; 
import employeeImage from './Images/logo.png';
const employeeData = {
  id: 1,
  name: 'Ankit Soni',
  position: 'Software Engineer',
  department: 'Engineering',
  email: 'ankit@gmail.com',
  phone: '123-456-7890',
  image: employeeImage, 
  skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Git'],
  experience: '5+ years',
  bio: 'Passionate about creating efficient and user-friendly web applications...',

};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/myprofile" element={<MyProfile employee={employeeData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
