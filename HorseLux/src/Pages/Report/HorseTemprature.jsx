import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import m1 from "../../Images/M1.png";
import { allRecordType, healthRecordType } from "../../config/Horses";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../config/Data";
import { BsSearch } from "react-icons/bs";

const HorseTemprature = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndtDate] = useState(new Date());
  const navigate = useNavigate();
  const handleTemprature = () => {
    navigate("/report/horse-temp");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-12 ">
        <h2 className="text-[30px] font-[700] text-center leading-[45px] py-2 ">
          HORSE TEMPRATURE REPORTS
        </h2>
        <h2 className="text-[24px] font-[700]  leading-[36px]">Time Frame</h2>
        <div className="flex px-5 gap-x-8 py-1">
          <DatePicker
            className="outline-none text-[16px] font-[600]  w-28"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h4 className="text-[16px] font-[600]">To</h4>
          <DatePicker
            className="outline-none text-[16px] font-[600]"
            selected={endtDate}
            onChange={(date) => setEndtDate(date)}
          />
        </div>
        <hr />
        <div className="w-1/2">
        <div className="flex items-center  mt-5 justify-between">
          <h3 className="text-[20px] font-[700] ">Select Horse</h3>
          <div className="flex gap-x-2">
            <label className="text-[15px] font-[600]">Select all</label>
            <input type="radio" />
          </div>
        </div>
        <div className="flex h-[45px] bg-[#F4F6F9] mt-5 w-full items-center justify-between border shadow-sm rounded-3xl px-4">
          <input
            type="text"
            className="outline-none bg-[#F4F6F9] w-full"
            placeholder="Search"
          ></input>
          <BsSearch className="w-[24px] h-[24px] text-[#858C94]" />
        </div>
        <div className=" space-y-3 mt-5">
          {data.map((items) => (
            <>
              <div className="flex items-center gap-x-3">
                <img
                  src={items.img}
                  className="w-[65px] h-[65px] rounded-full"
                />
                <div className="w-full flex justify-between">
                  <div>
                    <p className="text-[15px] font-[600]">{items.name}</p>
                    <p className="text-[10px] font-[600] ">
                      <span>Owner</span>
                      {items.onwer}
                    </p>
                  </div>
                  <input type="radio" />
                </div>
              </div>
              <hr />
            </>
          ))}

          <div></div>
        </div>
      <div className="flex justify-end">
      <button onClick={handleTemprature}  className="bg-[#D2AC47] mt-5  w-[83px] h-[44px] text-center text-[19px]  rounded-[14px]  font-[600]">
          Done
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HorseTemprature;
