import React, { useState } from "react";
import h1 from "../../Images/h1.png";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Compunents/Sidebar";
import { Popover } from "@mui/material";
import { dewormingRecor, popOver } from "../../config/Horses";

const AddDeworming = () => {
 

  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };
  const [selectedBreed, setSelectedBreed] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        ADD DEWORMING
        </h2>

        <div className="px-10">
          <div className="w-full">
            <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

            <div className="w-[39px] h-[39px] rounded-full mt-2 ">
              <img
                className="h-full w-full rounded-full object-fill"
                src={h1}
              />
              <p className="text-[10px] font-[600] text-center mt-1">Ferrier</p>
            </div>
            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add Detail
              </h2>
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Date
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                    Type
                    </label>
                    <br />
                    <div aria-describedby={id} variant="contained" onClick={handleClick} className="flex items-center justify-between border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md">
             <input
                // disabled={selectedBreed ? true : false}
                type="text"
                placeholder="Select"
                className="outline-none w-full"
                value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
             
              />
                <button type="button" className=" text-xl outline-none"><AiFillCaretDown/></button>
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
                <div className="bg-[#000032] text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                  <h2 className="text-[18px] text-center py-1 font-[700]">Select Deworming Record</h2>
                  <hr />
                  {dewormingRecor.map((item, index) => (
                    <div className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer" key={index}>
                      <input type="radio" />
                      <p onClick={() => handleBreedSelect(item.text)} className="text-[16px] font-[700] font-[Quicksand]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Popover>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Next Due Date
                    </label>
                    <br />
                    <input
                     type="text"
               
                      placeholder="12:00 PM"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Next Due Date
                    </label>
                    <br />
                    <input
                     type="text"
               
                      placeholder="12:00 PM"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Adminstrated By
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="Select Contact"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Comment
                    </label>
                    <br />
                    <textarea
                      type=" text"
                      placeholder="Add Comments"
                      rows="30"
                      className="py-1 h-32 border px-3 w-full shadow-md mt-1 outline-none  rounded-[10px]"
                    ></textarea>
                  </div>
                
                </div>

                <div className=" justify-between   w-[45%] -mt-16  ">
                  <label className="px-1  py-3 text-[16px] font-[600] mt-1 ">
                    Add Attachments
                  </label>
                  <div className="flex items-center mt-1 ">
                    <label
                      htmlFor="fileInput"
                      className="custom-file-upload border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
                    >
                      <AiOutlinePlus />
                      Add Attachments
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    //   onChange={handleFileChange}
                    />
                    {selectedFile && (
                      <button className=" text-[12px] font-[600] ml-2">
                        {" "}
                        {selectedFile.name}
                      </button>
                    )}
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

export default AddDeworming;
