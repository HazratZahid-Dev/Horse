import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };
  const navigate = useNavigate();

  const toDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-[80%] p-5 h-auto  flex flex-col gap-y-4 bg-opacity-70 bg-[#000] rounded-2xl">
          <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
            Create account,
          </h1>
          <p className="text-[22px] font-[Quicksand] font-[600] text-white">
            Sign up to get started
          </p>
          <div className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <div className="text-start  w-full px-3 text-white">
                <label>Name</label>
              </div>
              <input
                type="email"
                placeholder="Adam Smith"
                className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
              ></input>
            </div>
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <div className="text-start  w-full px-3 text-white">
                <label>Password</label>
              </div>
              <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <div className="text-start  w-full px-3 text-white">
                <label>Email</label>
              </div>
              <input
                type="email"
                placeholder="adamsmith@gmail.com"
                className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
              ></input>
            </div>
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <div className="text-start  w-full px-3 text-white">
                <label>Confirm Password</label>
              </div>
              <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={handleTogglePass}
                >
                  {showPass ? <BiHide size={20} /> : <BiShow size={20} />}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col gap-y-2 w-full items-center justify-center">
              <div className="text-start  w-full px-3 text-white">
                <label>Phone No</label>
              </div>
              <input
                type="email"
                placeholder="adamsmith@gmail.com"
                className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-full"
              ></input>
            </div>
          </div>
          <div className="text-center mt-2 w-[30%] flex flex-col gap-y-3 m-auto">
            <button
            onClick={toDashboard}
              className="w-full  py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
              type="button"
            >
              Sign up
            </button>
            <p className="text-[16px] text-white font-[400]">
              or continue with
            </p>
            <div className="flex items-center  gap-x-12  text-center justify-center">
              <div className="flex items-center text-white gap-x-2">
                <img src={face} className="w-[24px] h-[24px]" />
                <p>Facebook</p>
              </div>
              <div className="flex text-white text-center items-center gap-x-2">
                <img src={Frame} className="w-[24px] h-[24px]" />
                <p>Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
