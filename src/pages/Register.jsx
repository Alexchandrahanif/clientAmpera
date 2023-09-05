import React, { useState } from "react";
import register from "../assets/satu.svg";
import logo from "../assets/logoAlexBiru.png";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload, Modal } from "antd";
import UploadFile from "../components/utils/upload";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [fileList, setFileList] = useState([]);

  const formData = new FormData();
  formData.append("displayName", username);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phoneNumber", phoneNumber);
  formData.append("address", address);
  formData.append("photoUser", fileList?.[0]?.originFileObj);

  const handleSubmit = async () => {
    console.log(formData);
    const data = await axios({
      url: "http://localhost:3000/user/register",
      method: "POST",
      data: formData,
    })
      .then((response) => {
        message.loading("Loading...", 1, () => {
          navigate("/login");
          message.success(response.data.message);
        });
      })
      .catch((error) => {
        message.error("Gagal!");
      });
  };

  return (
    <div className="w-full h-screen  flex ">
      {/* Kanan */}
      <div className="hidden w-[50%] bg-slate-300 h-full sm:flex">
        <div className="flex justify-center items-center w-full">
          <img src={register} alt="" className="h-[400px] w-[400px]" />
        </div>
      </div>

      {/* Kiri */}
      <div className="w-[100%] sm:w-[50%] flex flex-col items-center">
        <div className="w-16 h-16 border-[1px] border-slate-800 flex justify-center items-center rounded-full mt-5">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </div>
        <p className="text-2xl font-bold mt-5">Selamat Datang!</p>

        <form className="w-[350px]  p-5 rounded-xl mt-5">
          {/* Photo Profile */}
          <UploadFile
            value={fileList}
            setValue={setFileList}
            title={"Profile"}
            single={true}
          />

          {/* Username */}
          <Input
            placeholder="Masukkan Username"
            className="mt-5 "
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          {/* Email */}
          <Input
            placeholder="Masukkan Email"
            className="mt-5 "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* Password */}
          <Input.Password
            placeholder="Masukkan Password"
            className="mt-5 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          {/* Phone Number */}
          <Input
            placeholder="Masukkan Phone Number"
            className="mt-5 "
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />

          {/* Address */}
          <Input
            placeholder="Masukkan Address"
            className="mt-5 "
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <Button
            type="primary"
            block
            className="mt-5 bg-sky-600"
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </form>

        <p className="font-light text-sm">
          Sudah Punya Akun?{" "}
          <span
            className="text-sky-900 font-normal cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
