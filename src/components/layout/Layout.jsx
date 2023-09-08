import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const [IsOpen, setIsOpen] = useState(true);

  function handeOpen() {
    setIsOpen(!IsOpen);
  }

  return (
    <div className="flex relative ">
      {IsOpen ? (
        <div className="w-[248px] fixed">
          <Sidebar />
        </div>
      ) : (
        <div className="w-5 ">
          <Sidebar />
        </div>
      )}
      <div
        className={
          IsOpen
            ? "dark:bg-main-dark-bg  bg-slate-100 min-h-screen md:ml-[248px] w-full"
            : "bg-slate-100 dark:bg-main-dark-bg w-full min-h-screen flex-2"
        }
      >
        <div className="h-[100px] w-full">
          <Navbar />
        </div>
        <div className=" h-[calc(100vh-100px)] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
