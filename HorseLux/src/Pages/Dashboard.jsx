import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import Newdata from "../config/Data";
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
import { baseUrl } from "../config/BaseUrl";
let token = localStorage.getItem("token");


const Dashboard = () => {
  const User = useSelector((state) => state.auth);
  const [showHorse, setShowHorse] = useState(false);
  const [harry, setHarry] = useState(true);

  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/addnewhorse-data/${User._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResponseData(response.data);
      console.log("My data********:", response.data);
    } catch (err) {
      setError(err);
      console.log('errrrrrrr',err);
    }
  };

  useEffect(() => {
    fetchData();
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
            {responseData.map((items) => (
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
                        {items.neckName}
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
