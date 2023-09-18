import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
