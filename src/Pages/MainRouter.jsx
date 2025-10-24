import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const MainRouter = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainRouter;
