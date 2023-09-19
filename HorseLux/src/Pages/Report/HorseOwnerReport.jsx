import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import m1 from "../../Images/M1.png";
import { allRecordType, healthRecordType, horseTemp } from "../../config/Horses";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useNavigate } from "react-router-dom";
import data from "../../config/Data";
import { BsSearch } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";

const HorseOwnerReport = () => {
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
          HORSE OWNER REPORTS
        </h2>
        <div className="flex gap-x-8 py-1">
        <div>
            {
                horseTemp.map((items)=>(
                    <div className="flex items-center gap-x-7 ">
                        <img src={items.img} className="w-[54px] h-[54px]"/>
                        <div >
                        <p className="text-[17px]  font-[700]">{items.name}</p>
                        {/* <p className="text-[17px] font-[600] flex gap-x-4"><span>{items.time}</span> <span>{items.temp}<span>&#176;</span> F</span></p> */}
                        <p className=""><spna className='text-[17px]  font-[700]'>OWNER:</spna> <span className='text-[17px] text-[#5B5B5B]  font-[600]'>Avalynn Bruce</span></p>

                        </div>
                      
                    </div>
                ))
            }
        </div> 
        </div>
        <hr />
      <div>
        <h2 className="text-[24px] font-[700] py-4 ">Contact info</h2>
       <div className="flex items-center gap-x-3">
        <p className="text-[20px] font-[700]">PRIMARY PHONE:</p>
        <p className="text-[20px] font-[600] text-[#5B5B5B]">0892891232321</p>
        <IoMdCall className="text-2xl"/>
        <BiSolidMessage  className="text-2xl"/>
       </div>
       <div className="flex items-center gap-x-3 mt-2">
        <p className="text-[20px] font-[700]">EMAIL:</p>
        <p className="text-[20px] font-[600] text-[#5B5B5B]">xyz@gmail.com</p>
       </div>
      </div>
      </div>
    </div>
  );
};

export default HorseOwnerReport;
