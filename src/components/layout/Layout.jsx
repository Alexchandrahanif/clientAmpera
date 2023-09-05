import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  const [IsOpen, setIsOpen] = useState(true);

  function handeOpen() {
    setIsOpen(!IsOpen);
  }

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {IsOpen ? (
        <div className="w-52 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-5 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          IsOpen
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-52 w-full"
            : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
        }
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
