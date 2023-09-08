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

  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const formData = new FormData();
  formData.append("displayName", displayName);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phoneNumber", phoneNumber);
  formData.append("address", address);
  formData.append("companyName", companyName);
  formData.append("companyAddress", companyAddress);

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
        <p className="mt-10 font-bold text-2xl">REGISTER</p>

        <div className="w-full p-5 rounded-xl flex flex-col  items-center ">
          <div className="flex flex-wrap justify-around">
            {/* Username */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Diplay Name"
              className="mt-5 "
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Username"
              className="mt-5 "
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            {/* Email */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Email"
              className="mt-5 "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {/* Password */}
            <Input.Password
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Password"
              className="mt-5 "
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {/* Phone Number */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Nomor Telepon"
              className="mt-5 "
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            {/* Address */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Alamat"
              className="mt-5 "
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            {/* Company Name */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Nama Perusahaan"
              className="mt-5 "
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />

            {/* CompanyAddress */}
            <Input
              style={{ width: "300px" }}
              size="large"
              placeholder="Masukkan Alamat Perusahaan"
              className="mt-5 "
              value={companyAddress}
              onChange={(e) => {
                setCompanyAddress(e.target.value);
              }}
            />
          </div>
          <Button
            // classNames="w-[85%]"
            style={{ width: "300px" }}
            size="large"
            type="primary"
            block
            className="mt-5 bg-sky-600"
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </div>

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
