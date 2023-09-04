import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import Popover from "@mui/material/Popover";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { contactType } from "../../../config/Horses";
import { edimaLevel, milktestProprties } from "../../../config/HorseDetail";

const AddOvulation = () => {
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
          add ovulation
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
                      Edema Level{" "}
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                      <input
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                        className="outline-none w-full h-full"
                        type="text"
                        value={selectedProperty || ""}
                        placeholder="choose"
                      />
                      <AiFillCaretRight className="text-2xl text-gray-300" />
                    </div>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      // style={{ width: '' }}
                      sx={{ width: "1000px" }}
                    >
                      <div className=" bg-[#000032] text-white h-auto p-2   w-96 ">
                        {edimaLevel.map((property, index) => (
                          <div
                            className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                            key={index}
                            onClick={() =>
                              handlePropertySelect(property.property)
                            }
                          >
                            <input
                              type="radio"
                              checked={selectedProperty === property.property}
                            />
                            <p className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
                              {property.property}
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
                      Status <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      //   onChange={handleQuantityChange}
                      //   value={quantity}
                      placeholder="Adam"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Follicle Size{" "}
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Ph"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
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
                      placeholder="Price"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Next Ovulation Date
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Next Ovulation Date"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
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
                      placeholder="Price"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    />
                  </div>
                  <div className=" justify-between mt-1   w-[45%]  ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Comments
                    </label>
                    <textarea
                      placeholder="Add Comments"
                      className="py-1 w-full border px-3 shadow-md mt-1 h-20 outline-none rounded-[10px]"
                    ></textarea>
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

export default AddOvulation;
