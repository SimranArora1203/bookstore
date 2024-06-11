import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import toast, { Toaster } from "react-hot-toast";
import Home from "./Home/Home";
import Course from "./Course/Course";
import { Routes, Route } from "react-router-dom";
import Signup from "../components/Signup";
import Contact from "./Contact";
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";
const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/course"
          element={authUser ? <Course /> : <navigate to="/signup" />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
