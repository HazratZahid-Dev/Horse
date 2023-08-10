import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import data from "../config/Data";
import { AiOutlineMinusCircle, AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import Horses from "./Horses";
import '../Style/Home.css'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showHorse,setShowHorse]=useState(false);
  const [harry,setHarry]=useState(true);

  const toHorses=()=>{
    setShowHorse(!showHorse)
    setHarry(!harry)
  }
  const navigate=useNavigate();
  const toHorsesDetail=()=>{
    navigate('/horsedetail')

  }
  return (
    <div className="flex">
      <Sidebar />
     
    <div className="flex w-full relative">
    {
      harry && (
        <div className="space-y-4 w-full py-12 px-12">
      
        {data.map((items) => (
          <div className="pr-44">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-x-4 ">
                <img
                  src={items.img}
                  className="w-[106px] h-[106px] rounded-full"
                />
                <div>
                  <p className="text-[24px] font-[600]">{items.name}</p>
                  <p className="text-[16px] font-[600] text-[#5B5B5B]">
                    <span className="text-black">Owner: </span>
                    {items.onwer}
                  </p>
                  <p className="text-[16px] font-[600] text-[#5B5B5B]">
                    <span className="text-black">Sex:</span> {items.sex}
                  </p>
                </div>
              </div>
              <div>
                <button onClick={toHorsesDetail} className="text-xl cursor-pointer font-semibold text-[#000032]">
                  {items.arrow}
                </button>
              </div>
            </div>
            <hr className="w-full mt-3  " />
          </div>
        ))}
      </div>
      )
     }
     <div className="w- px-8 absolute right-10 top-10">
          <button onClick={toHorses} className=" text-[#000032] font-bold  text-[48px] flex items-center justify-center rounded-full">
          {
            !showHorse ?   <AiOutlinePlusCircle /> : <AiOutlineMinusCircle/>

          }
          </button>
        </div>
   
      {
        showHorse && (
         <div className="animate-slideInFromBottom">
         <Horses/>
         </div>
        )
          

        
      }
    </div>
    </div>
  );
};

export default Dashboard;
