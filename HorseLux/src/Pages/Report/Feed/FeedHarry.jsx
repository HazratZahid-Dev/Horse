import React from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../Compunents/Sidebar";
import data from "../../../config/Data";
import { AiOutlinePlus } from "react-icons/ai";
// import data from "../../config/Data";
// import Sidebar from "../../Compunents/Sidebar";

const FeedHarry = () => {
    const navigate=useNavigate()
 
  
      const navigateToDifferentPath = () => {
        navigate('/report/duedatereport')
    };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-12 ">
        <div >
         <h2 className="text-[30px] font-[700] ">
         FEED
         </h2>
        </div>
        <hr className=""/>
        <div className="py-5 space-x-4">
          <button type="button" className="w-[68px] text-[15px] font-[600] py-[2px] bg-[#000032] text-white h-[26px] rounded-[9px]">AM</button>
          <button type="button" className="w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px]">Lunch</button>
          <button type="button" className="w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px]">PM</button>
          <button type="button" className="w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px]">Night</button>

        </div>
        <h2 className="text-[20px] font-[700]">AM Meal</h2>
        <div className="w-[40%]">
        <div className="flex justify-center py-3">
        <button className="flex items-center px-3  text-[15px] font-[600] gap-x-2 h-[33px] border rounded-[9px]"><AiOutlinePlus className="font-bold"/>Add Feed</button>

        </div>
        <form className="space-y-2">
          <label className="text-[16px] ml-4 font-[600] text-[#2C3A4B]">
            Supplement
          </label>
          <textarea className="w-full rounded-[10px] outline-none p-3 shadow-md h-24 border"></textarea>
          <div className="flex">
            <p className="text-[17px] font-[600]">Supplement Pack</p>
          </div>
          <button className="h-[55px] mt-3 text-white bg-[#000032] w-full text-[18px] font-[600] rounded-full">Save</button>
        </form>

        </div>

       
      </div>
    </div>
  );
};

export default FeedHarry;
