import React, { useState } from "react";
import "../Style/Home.css";
import face from "../Images/face.png";
import Frame from "../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-20 h-auto bg-opacity-70 bg-[#000] rounded-2xl">
          <div className="m-auto w-[70%] text-center">
            <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
              Welcome
            </h1>
            <p className="font-[Quicksand] text-[22px] font-[600]  text-white">
              Sign in to continue
            </p>
          </div>

        
          <div className="flex flex-col gap-y-3 py-3 w-full items-center justify-center">
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <div className="text-start  w-[70%] px-3 text-white">
              <label>Email</label>
            </div>
            <input
              type="email"
              placeholder="adamsmith@gmail.com"
              className="rounded-2xl py-2 outline-none px-4 bg-[#EBEEF2] w-[70%] "
            ></input>
          </div>
            <div className="text-start  w-[70%] px-3 text-white">
              <label>Password</label>
            </div>
            <div className="relative w-[70%] rounded-2xl bg-[#EBEEF2]">
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
            <div className="text-start  w-[70%] px-3 text-white flex gap-x-2">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p className="font-[Source Sans Pro] text-white text-[16px] font-[600] text-center">
              Forgot the password?
            </p>
            <button
              className="w-[70%] py-2 border justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
              type="button"
            >
              Sign in
            </button>
            <p className="text-[16px] text-white font-[400]">
              or continue with
            </p>
            <div className="flex items-center gap-x-12">
              <div className="flex items-center text-white gap-x-2">
                <img src={face} className="w-[24px] h-[24px]" />
                <p>Facebook</p>
              </div>
              <div className="flex text-white items-center gap-x-2">
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

export default SignIn;
