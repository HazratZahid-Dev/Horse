import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import Popover from "@mui/material/Popover";
import { HorseColor, popOver, sex } from "../../../config/Horses";
import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiOutlinePlus,
} from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { contactType } from "../../../config/Horses";
import { milktestProprties } from "../../../config/HorseDetail";

const AddFoal = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [anchorSex, setAnchorSex] = useState(null);
  const handleSex = (event) => {
    setAnchorSex(event.currentTarget);
  };
  const handleCloseSex = () => {
    setAnchorSex(null);
  };
  const openSex = Boolean(anchorSex);
  const idSex = openSex ? "simple-popover" : undefined;
  const handleSelectSex = (sex) => {
    setSelectedSex(sex);
    setAnchorSex(null);
  };

  const filteredSex = sex.filter(
    (item) => item.text === "Colt" || item.text === "Filly"
  );

  // Color
  const [color, setColor] = useState("");
  const [anchorColor, setAnchorColor] = useState(null);
  const handleColor = (event) => {
    setAnchorColor(event.currentTarget);
  };
  const handleCloseColor = () => {
    setAnchorColor(null);
  };
  const openColor = Boolean(anchorColor);
  const idColor = openColor ? "simple-popover" : undefined;
  const handleSelectColor = (sex) => {
    setColor(sex);
    setAnchorColor(null);
  };

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
          ADD FOALING
        </h2>

        <div className="px-20">
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
              <div className="flex">
                {/* left side Form */}

                <form className="w-1/2">
                  <div className="flex justify-between  ">
                    <div className="w-[80%] ">
                      <label className="px-[14px] text-gray-500 text-[16px] font-[500] ">
                        Date <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <input
                        type=" text"
                        placeholder="22-jun-2023"
                        className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="w-[80%]">
                      <label className="px-[14px]  text-gray-500 text-[16px] font-[500] ">
                        Account
                      </label>
                      <br />

                      <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                        <input
                          aria-describedby={id}
                          variant="contained"
                          onClick={handleClick}
                          className="outline-none w-full h-full"
                          type=" text"
                          value={selectedProperty || ""}
                          placeholder="Select Contact..."
                        ></input>
                        <AiFillCaretRight className="text-2xl text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2  ">
                    <div className="w-[80%] ">
                      <label className="px-[14px] text-gray-500  text-[16px] font-[500] ">
                        Price
                      </label>
                      <br />
                      <input
                        type=" text"
                        placeholder="$Price"
                        className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      ></input>
                    </div>
                  </div>

                  <div className=" justify-between mt-1   w-[80%]  ">
                    <label className="px-[14px] text-gray-500  text-[16px] font-[500] ">
                      Comments
                    </label>
                    <input
                      type=" text"
                      placeholder="Add Comments..."
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
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
                    className="bg-[#000032] w-[80%] mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                  >
                    Save
                  </button>
                </form>

                {/* right side form */}

                <form className="border border-black flex flex-col space-y-4 py-4 rounded-md w-1/3 pl-2 ml-12 mb-6">
                  <h2 className="text-[16px] font-[600] ">Foal Details:</h2>
                  <div className="px-2">
                    <label className="font-semibold">Name</label>
                    <input
                      type=" text"
                      placeholder="Full name"
                      className="w-full h-5   border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name"
                    ></input>
                  </div>
                  <div className="px-2">
                    <label className="font-semibold ">Sex</label>
                    <div
                      onClick={handleSex}
                      className=" flex items-center border-b border-gray-300 justify-between  outline-none     "
                    >
                      <input
                        disabled={selectedSex ? true : false}
                        type=" text"
                        value={selectedSex}
                        onChange={(e) => setSelectedSex(e.target.value)}
                        placeholder="Sex"
                        className="w-full h-5 bg-white   focus:outline-none "
                        label="Name"
                      ></input>
                      <button type="button" className=" text-md ">
                        <AiFillCaretDown />
                      </button>
                    </div>
                    <Popover
                      id={idSex}
                      open={openSex}
                      anchorEl={anchorSex}
                      onClose={handleCloseSex}
                      className="mt-0"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="bg-[#000032]  text-white w-[355px] h-32 overflow-y-auto py-2 px-5 font-[Quicksand]">
                        <h2 className="text-[18px] font-[700]">
                          Select Horse Breed
                        </h2>
                        <hr />
                        {filteredSex.map((item, index) => (
                          <div
                            onClick={() => handleSelectSex(item.text)}
                            className="flex gap-x-2 px-1 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-2xl  py-1 cursor-pointer"
                            key={index}
                          >
                            <input type="radio" />
                            <p
                            
                              className="text-[16px]  hover:text-yellow-600 font-[700] font-[]"
                            >
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Popover>
                  </div>

                <div className="px-2">
                   
                <label className="text-[16px] pt-1 font-[600] text-[#2C3A4B]">
                    Color <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={handleColor}
                    className="flex items-center border-b border-gray-300 justify-between  outline-none  "
                  >
                    <input
                      disabled={setColor ? true : false}
                      type="text"
                      placeholder="Color"
                      className="w-full h-5 bg-white   rounded-none resize-none  focus:outline-none "
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                    <button type="button" className=" text-md outline-none">
                      <AiFillCaretDown />
                    </button>
                  </div>
                  <Popover
                    id={idColor}
                    open={openColor}
                    anchorEl={anchorColor}
                    onClose={handleCloseColor}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div className="bg-[#000032] text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                      <h2 className="text-[18px] font-[700]">
                        Select Horse Breed
                      </h2>
                      <hr />
                      {HorseColor.map((item, index) => (
                        <div
                          className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                          key={index}
                        >
                          <input type="radio" />
                          <p
                            onClick={() => handleSelectColor(item.text)}
                            className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]"
                          >
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Popover>
                </div>
                

                  <div className=" justify-between  w-[95%] ml-2">
                    <label className="font-semibold">Marking</label>
                    <input
                      type=" text"
                      placeholder="foal marking"
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name"
                    ></input>
                  </div>

                  <div className=" justify-between   w-[95%] ml-2">
                    <label className="font-semibold">Length to stand</label>
                    <input
                      type=" text"
                      placeholder="foal length to stand"
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5 border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name"
                    ></input>
                  </div>

                  <div className=" justify-between   w-[95%] ml-2">
                    <label className="font-semibold">Length to feed</label>
                    <input
                      type=" text"
                      placeholder="Foal lenth to feed"
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name"
                    ></input>
                  </div>

                  <div className=" justify-between  mb-5  w-[95%] ml-2">
                    <label className="font-semibold">IGG Titter</label>
                    <input
                      type=" text"
                      placeholder="Foal igg titter"
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5 border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoal;
