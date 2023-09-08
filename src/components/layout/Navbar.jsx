import { Image } from "antd";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [userPhoto, setUserPhoto] = useState(localStorage.getItem("photoUser"));

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedDate = `${currentDateTime.toLocaleDateString("id-ID", {
    weekday: "long",
  })}, ${currentDateTime
    .getDate()
    .toString()
    .padStart(2, "0")} ${currentDateTime.toLocaleDateString("id-ID", {
    month: "long",
  })} ${currentDateTime.getFullYear()}`;

  const formattedTime = `${currentDateTime
    .getHours()
    .toString()
    .padStart(2, "0")} : ${currentDateTime
    .getMinutes()
    .toString()
    .padStart(2, "0")} : ${currentDateTime
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="w-full flex justify-between h-full bg-white border-b-2 border-slate-200">
      {/* Kiri */}
      <div className="h-full w-[350px] flex flex-col justify-center pl-5">
        <p className="text-3xl font-extrabold">
          {localStorage.getItem("activeMenu")
            ? localStorage.getItem("activeMenu")
            : "Dashboard"}
        </p>
        <p className="text-md font-medium text-gray-500"> {formattedDate} </p>
      </div>

      {/* Kanan */}
      <div className="flex justify-end pr-5 items-center w-[300px] ">
        <p className="text-primaryDark  text-md font-semibold font-poppins mr-2">
          {localStorage.getItem("displayName")}
        </p>
        {userPhoto && (
          <Image
            width={50}
            height={50}
            style={{ borderRadius: "100%" }}
            src={userPhoto}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
