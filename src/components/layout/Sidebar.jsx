import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

import { dataSidebar } from "../../constants";
const dataMenu = [dataSidebar.pop()];

const Sidebar = () => {
  const navigate = useNavigate();
  const activeMenu = localStorage.getItem("activeMenu") || dataSidebar[0].name;

  return (
    <div className="w-full h-screen bg-primaryLight px-5  flex flex-col">
      {/* Logo */}
      <div className="flex  items-center  h-[100px] ">
        <img src={"/logoAlex.png"} alt="logo" className="h-12 w-12" />
        <p className="font-black font-poppins text-2xl text-white">AMPERA</p>
      </div>

      {/* Menu */}
      <div className="h-[75%]">
        {dataSidebar &&
          dataSidebar?.map((el, index) => (
            <Link
              to={el.link}
              key={index}
              className={`text-white text-md font-poppins px-3 py-2 cursor-pointer flex items-center gap-3 mb-1 ${
                activeMenu === el.name
                  ? "bg-primaryDark rounded-lg font-semibold "
                  : "hover:bg-primary hover:rounded-lg"
              }`}
              onClick={() => {
                localStorage.setItem("activeMenu", el.name);
              }}
            >
              {el.icon}
              {el.name}
            </Link>
          ))}
      </div>
      <div className="">
        {dataMenu &&
          dataMenu?.map((el, index) => {
            return (
              <div
                key={index}
                className="text-white text-md  font-poppins px-3 py-2 cursor-pointer hover:bg-[#041059] hover:rounded-lg  flex items-center gap-3 "
                onClick={() => {
                  message.loading("Loading...", 1, () => {
                    localStorage.clear();
                    message.success("Sampai Jumpa Lagi!!");
                    navigate("/login");
                  });
                }}
              >
                {el.icon}
                {el.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
