import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import Popover from "@mui/material/Popover";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { contactType } from "../../../config/Horses";
import { edimaLevel, milktestProprties } from "../../../config/HorseDetail";

const Addpregnancy = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setAnchorEl(null); // Close the popover when an item is selected
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
          ADD PREGNANCY CHECK
        </h2>

        <div className="px-10">
          <div className="w-full">
            <div className="w-[45%] ">
              <div className="w-full">
                <h2 className="w-full text-[20px] font-[700] ">
                  Selected Horse
                </h2>

                <div className="w-[39px] h-[39px] rounded-full mt-2 ">
                  <img
                    className="h-full w-full rounded-full object-fill"
                    src={h1}
                  />
                  <p className="text-[10px] font-[600] text-center mt-1">
                    Ferrier
                  </p>
                </div>
              </div>
            </div>

            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add detail
              </h2>
              <form className="w-full py-2">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Date <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Ultrasound Notes
                    </label>
                    <br />
                    <textarea
                      aria-describedby={id}
                      variant="contained"
                      className="outline-none h-16 border p-2 rounded-[10px] shadow-md w-full"
                      type="text"
                      placeholder="choose"
                    />

             
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Account
                    </label>
                    <br />
                    <input
                      type="text"
                      //   onChange={handleQuantityChange}
                      //   value={quantity}
                      placeholder="Select Contact"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Medication Notes
                    </label>
                    <br />
                    <textarea
                      aria-describedby={id}
                      variant="contained"
                      className="outline-none border p-2 rounded-[10px] shadow-md w-full h-16"
                      type="text"
                      placeholder="Add Medication Notes"
                    />

                 
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Price
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="$ Price"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Comments
                    </label>
                    <br />
                    <textarea
                      aria-describedby={id}
                      variant="contained"
                      className="outline-none border p-2 rounded-[10px] shadow-md w-full h-16"
                      type="text"
                      placeholder="Comments"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Days in Foal
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Days in Foal"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className=" justify-between   w-[45%] mt-2   ">
                    <label className="px-1  py-3 text-[16px] font-[600]  ">
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
                </div>
                <button
                  type="submit"
                  className="bg-[#000032]  w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
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

export default Addpregnancy;
