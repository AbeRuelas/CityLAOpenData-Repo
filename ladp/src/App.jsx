import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
// import Main from './components/main';
import Navigate from "./components/Navigate";
import Register from "./components/Register";
import Sitenav from "./components/Sitenav";

function App() {
  return (
    <React.Fragment>
      <Sitenav />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navigate" element={<Navigate />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <Main /> */}

      <Footer />
    </React.Fragment>
  );
}

export default App;
