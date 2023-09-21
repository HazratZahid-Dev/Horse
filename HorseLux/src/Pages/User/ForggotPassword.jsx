import React, { useState } from "react";
import "../../Style/Home.css";
import face from "../../Images/face.png";
import Frame from "../../Images/Frame.png";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ForggotPassword = () => {
  const navigate = useNavigate();
  const toReset = () => {
    navigate("/resetpassword");
  };
  return (
    <div>
      <div className="bg-signIn bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center">
        <div className="w-1/2 flex flex-col  py-10 px-20 h-auto bg-opacity-70 bg-[#000] rounded-2xl">
          <div className="m-auto w-[70%] text-center">
            <h1 className="text-white font-[Source Sans Pro] text-[40px] font-[700] leading-[60px] ">
              Forgot password
            </h1>
            <p className="font-[Source Sans Pro] mt-8 text-[16px] font-[400]  text-white">
              Code has been send to adam*******@gmail.com{" "}
            </p>
          </div>
          <div className="m-auto w-[70%] mt-8 text-center flex items-center gap-x-3">
            <input
              type="text"
              className="w-[83px] h-[68px] text-[29px] font-[600] font-[Source Sans Pro] rounded-[20px] text-center outline-none"
            ></input>
            <input
              type="text"
              className="w-[83px] h-[68px] text-[29px] font-[600] font-[Source Sans Pro] rounded-[20px] text-center outline-none"
            ></input>
            <input
              type="text"
              className="w-[83px] h-[68px] text-[29px] font-[600] font-[Source Sans Pro] rounded-[20px] text-center outline-none"
            ></input>
            <input
              type="text"
              className="w-[83px] h-[68px] text-[29px] font-[600] font-[Source Sans Pro] rounded-[20px] text-center outline-none"
            ></input>
          </div>
          <div className="font-[Source Sans Pro]  flex flex-col  items-center justify-center">
            <p className="text-[16px] text-white font-[400] mt-8">
              Resend code in 56 s
            </p>
            <button
              onClick={toReset}
              className="w-[70%] font-[Source Sans Pro] py-2 mt-5 border text-[18px] justify-center bg-gradient-to-r rounded-2xl font-semibold from-[#ae8625] via-f7ef8a to-[#edc967]"
              type="button"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForggotPassword;
