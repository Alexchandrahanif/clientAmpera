import React, { useState } from "react";
import login from "../assets/login.svg";
import logo from "../assets/logoAlexBiru.png";
import axios from "axios";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        message.loading("Loading...", 1, () => {
          localStorage.setItem("authorization", response.data.authorization);
          message.success(response.data.message);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("Gagal:", error);
        message.error("Gagal!");
      });
  };

  return (
    <div className="w-full h-screen  flex">
      {/* Kanan */}
      <div className="hidden w-[50%] bg-slate-300 h-full sm:flex">
        <div className="flex justify-center items-center w-full">
          <img src={login} alt="" className="h-[400px] w-[400px]" />
        </div>
      </div>

      {/* Kiri */}
      <div className="w-[100%] sm:w-[50%] flex flex-col items-center">
        <div className="w-16 h-16 border-[1px] border-slate-800 flex justify-center items-center rounded-full mt-28">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>
        <p className="text-2xl font-bold mt-5">Selamat Datang!</p>
        <p className="font-light max-w-[300px]  text-center sm:max-w-full">
          Silahkan Login, dan kelola restoran anda dengan cepat dan efisien
        </p>

        <form className="w-[350px]  p-5 rounded-xl mt-10">
          <Input
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input.Password
            placeholder="Masukkan Password"
            className="mt-5 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button
            type="primary"
            block
            className="mt-5 bg-sky-600"
            onClick={() => handleSubmit()}
          >
            Login
          </Button>
        </form>

        <p className="font-light text-sm">
          Belum Punya Akun?{" "}
          <span
            className="text-sky-900 font-normal cursor-pointer"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
