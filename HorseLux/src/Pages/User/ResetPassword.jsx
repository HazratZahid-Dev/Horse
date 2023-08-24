import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleTogglePass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
const navigate=useNavigate()
  const toApp=()=>{
    navigate('/newapp')

  }
  
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 px-20 h-auto bg-opacity-70 bg-[#000] py-8 rounded-2xl">
          <div className="m-auto w-[70%] ">
            <h1 className="text-white font-[Quicksand] text-[40px] font-[700] leading-[60px] ">
              Reset Password
            </h1>
            <p className="font-[Quicksand] text-[22px] font-[600]  text-white">
              Sign in to continue
            </p>
          </div>

        
          <div className="flex flex-col gap-y-3 py-3 w-full items-center justify-center">
          <div className="flex flex-col gap-y-2 w-full items-center justify-center">
            <div className="text-start  w-[70%] px-3 text-white">
              <label className="text-[16px] font-[600] font-[Source Sans Pro]">New Password</label>
            </div>
            <div className="relative w-[70%] rounded-2xl bg-[#EBEEF2]">
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
            <div className="text-start  w-[70%] px-3 text-white">
              <label className="text-[16px] font-[600] font-[Source Sans Pro]">Confirm New Password</label>
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
            <div className="text-start mt-4   w-[70%] px-4 text-white flex gap-x-2">
              <input type="checkbox" />
              <label className="text-[14px]  font-[600] font-[Source Sans Pro]">Remember me</label>
            </div>
           
            <button
            onClick={toApp}
              className="w-[70%] py-2 border font-[Source Sans Pro] justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
              type="button"
            >
              Save
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
