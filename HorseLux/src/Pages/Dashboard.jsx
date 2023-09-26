import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import data from "../config/Data";
import {
  AiOutlineMinusCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import Horses from "./Horses";
import "../Style/Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const User = useSelector((state) => state.auth);
  const [showHorse, setShowHorse] = useState(false);
  const [harry, setHarry] = useState(true);

  const FetchData = async () => {
    const response = await axios.get(
      `https://hurseluxprojectupdate-production.up.railway.app/addnewhorse-data/64d38f949ed7fb061dc22c70`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Z…g0OH0.3tQ7Rfn04TELF55udT2fyXpnaSNwer45PDdI5GRElOI", // Add any custom headers you need
        },
      }
    );
  };

  useEffect(() => {
    FetchData();
  }, []);

  const toHorses = () => {
    setShowHorse(!showHorse);
    setHarry(!harry);
  };
  const navigate = useNavigate();
  const toHorsesDetail = () => {
    navigate("/horsedetail");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex w-full relative">
        {harry && (
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
                    <button
                      onClick={toHorsesDetail}
                      className="text-xl cursor-pointer font-semibold text-[#000032]"
                    >
                      {items.arrow}
                    </button>
                  </div>
                </div>
                <hr className="w-full mt-3  " />
              </div>
            ))}
          </div>
        )}
        <div className="w- px-8 absolute right-10 top-10">
          <button
            onClick={toHorses}
            className=" text-[#000032] font-bold  hover:bg-gradient-to-r from-[#AE8625] via-[#615f36] to-[#D2AC47] hover:text-white hover:scale-105  text-[48px] flex items-center justify-center rounded-full"
          >
            {!showHorse ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
          </button>
        </div>

        {showHorse && (
          <div className="animate-slideInFromBottom m-auto">
            <Horses />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
