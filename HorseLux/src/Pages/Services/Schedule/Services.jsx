import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { contactType } from "../../../config/Horses";

const Services = () => {


  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };



 

 

  

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
        NEW EVENT
        </h2>

        <div className="px-10">
          <div className="w-full">
          
            <div className="w-full">
            
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Event Type <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                <input
                  variant="contained"
                  className="outline-none w-full h-full"
                  type=" text"
                  placeholder="Services"
                ></input>
                <AiFillCaretRight className="text-2xl text-gray-300" />
              </div>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Participants
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Select Contact"
                      className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                  Services <span className="text-red-500">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                 
                      placeholder="Select..."
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                    Administrated By
*
                    </label>
                    <br />
                    <input
                      type="text"
                  
                      placeholder="Select contact"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
              Description
                    </label>
                    <br />
                    <input
                      type="text"
                 
                      placeholder="Select..."
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                Start
*
                    </label>
                    <br />
                    <input
                      type="text"
                  
                      placeholder="20-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                  Horses 
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                <input
                  variant="contained"
                  className="outline-none w-full h-full"
                  type=" text"
                  placeholder="Select horse"
                ></input>
                <AiFillCaretRight className="text-2xl text-gray-300" />
              </div>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
              End
*
                    </label>
                    <br />
                    <input
                      type="text"
                  
                      placeholder="5-july-2022"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                  Color 
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                <input
                  variant="contained"
                  className="outline-none w-10 h-10 rounded-xl"
                  type="color"
                  style={{ borderRadius: '50%' }}
                ></input>
                <AiFillCaretRight className="text-2xl text-gray-300" />
              </div>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
             Comments

                    </label>
                    <br />
                    <textarea
                      type="text"
                  
                      placeholder="Comments"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-24 rounded-[10px]"
                    ></textarea>
                  </div>
                </div>

                <div className=" justify-between   w-[45%]  "></div>
                <button
                  type="submit"
                  onClick={toHome}
                  className="bg-[#000032] w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
