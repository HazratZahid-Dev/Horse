import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import m1 from "../../Images/M1.png";
import { allRecordType, healthRecordType, horseTemp } from "../../config/Horses";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../config/Data";
import { BsSearch } from "react-icons/bs";

const HorseTemp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endtDate, setEndtDate] = useState(new Date());
  const navigate = useNavigate();
  const handleHealthRecord = () => {
    navigate("/report/horsehealthresult");
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
      <div>
        <h2 className="text-[24px] font-[700] py-8">Monday, 24, JUNE, 2023</h2>
        <div>
            {
                horseTemp.map((items)=>(
                    <div className="flex items-center gap-x-7 ">
                        <img src={items.img} className="w-[54px] h-[54px]"/>
                        <div >
                        <p className="text-[17px] font-[700]">{items.name}</p>
                        <p className="text-[17px] font-[600] flex gap-x-4"><span>{items.time}</span> <span>{items.temp}<span>&#176;</span> F</span></p>
                        </div>
                      
                    </div>
                ))
            }
        </div> 
        <hr className="mt-3 w-1/2"/>
      </div>
      </div>
    </div>
  );
};

export default HorseTemp;
