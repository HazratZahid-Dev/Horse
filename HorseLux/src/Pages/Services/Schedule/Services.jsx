import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate, useParams,useLocation } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { contactType, eventType } from "../../../config/Horses";

const Services = () => {
const [value,setValue]=useState()
const params= useLocation()
console.log(params.state.value);
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedBreed, setSelectedBreed] = useState(eventType[eventType.length - 1].text);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
    setAnchorEl(null);
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
                <div className="flex justify-between items-center  ">
                <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Event Type
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                      className="py-1 flex items-center justify-between   w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    >
                      <input
                        variant="contained"
                        className="outline-none  w-full h-full"
                        type=" text"
                        placeholder="Choose..."
                        value={selectedBreed}
                        onChange={(e) => setSelectedBreed(e.target.value)}
                      ></input>
                      <AiFillCaretRight className="text-2xl text-gray-500" />
                    </div>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      className="mt-2"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="bg-[#000032] breadScroll text-white w-[355px] h-auto overflow-y-auto py-2 px-5 font-[Quicksand]">
                        <h2 className="text-[18px] text-center py-1 font-[700]">
                          Event Type
                        </h2>
                        <hr />
                        {eventType.map((item, index) => (
                          <div
                            className="flex gap-x-2 px-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                            key={index}
                            onClick={() => handleBreedSelect(item.text)}
                          >
                            <Link to={item.link} className="text-[16px] font-[700] font-[Quicksand]">
                              {item.text}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </Popover>
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
                   <Link to='/servicesrecord'>
                   <input
                      type="text"
                      value={params.state.value}
                      placeholder="Select..."
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                   </Link>
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
