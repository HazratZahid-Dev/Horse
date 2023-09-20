import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../Compunents/Sidebar";
import data from "../../../config/Data";
import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { feedData, fraction, units } from "../../../config/Horses";
import Switch from '@mui/material/Switch';


const FeedHarry = () => {
  const navigate = useNavigate();
  const [mealType, setMealType] = useState("AM");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigateToDifferentPath = () => {
    navigate("/report/duedatereport");
  };

  const handleButtonClick = (newMealType) => {
    setMealType(newMealType);
  };

  // Select fraction

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

  // unit
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

  // State variable to store the selected item
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    // Update the selected item and close the Popover
    setSelectedItem(item);
    handleClose();
  };

  // Switch buttons
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-12 ">
        <div>
          <h2 className="text-[30px] font-[700]">FEED</h2>
        </div>
        <hr className="" />
        <div className="py-5 space-x-4">
          <button
            type="button"
            onClick={() => handleButtonClick("AM")}
            className={`w-[68px] text-[15px] font-[600] py-[2px] bg-[#000032] text-white h-[26px] rounded-[9px] ${
              mealType === "AM" ? "bg-[#000032]" : "bg-[#B0B0B0]"
            } `}
          >
            AM
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("Lunch")}
            className={`w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px] ${
              mealType === "Lunch" ? "bg-[#000032]" : "bg-[#B0B0B0]"
            }`}
          >
            Lunch
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("PM")}
            className={`w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px] ${
              mealType === "PM" ? "bg-[#000032]" : "bg-[#B0B0B0]"
            }`}
          >
            PM
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("Night")}
            className={`w-[68px] text-[15px] font-[600] py-[2px] bg-[#B0B0B0] text-white h-[26px] rounded-[9px] ${
              mealType === "Night" ? "bg-[#000032]" : "bg-[#B0B0B0]"
            }`}
          >
            Night
          </button>
        </div>
        <h2 className="text-[20px] font-[700]">{mealType} Meal</h2>
        <div className="w-[40%]">
          {/* <div className="flex justify-center py-3">
            <button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              className="flex items-center px-3  text-[15px] font-[600] gap-x-2 h-[33px] border rounded-[9px]"
            >
              <AiOutlinePlus className="font-bold" />
              Add Feed
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="bg-[#000032] text-white p-3  space-y-4 w-72 ">
                {feedData.map((item) => (
                  <div
                    key={item.feed}
                    onClick={() => handleItemClick(item.feed)}
                   className="flex  items-center gap-x-3">
                    <input type="radio" />
                    <p
                     
                    
                    >{item.feed}</p>
                  </div>
                ))}
              </div>
            </Popover>
          </div> */}
          <div className="flex justify-center py-3">
            {selectedItem ? (
              <></>
            ) : (
              <button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                className="flex items-center px-3  text-[15px] font-[600] gap-x-2 h-[33px] border rounded-[9px]"
              >
                <AiOutlinePlus className="font-bold" />
                Add Feed
              </button>
            )}
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div className="bg-[#000032] text-white p-3  space-y-4 w-72 ">
                {feedData.map((item) => (
                  <div
                    key={item.feed}
                    onClick={() => handleItemClick(item.feed)}
                    className="flex  items-center gap-x-3"
                  >
                    <input type="radio" />
                    <p>{item.feed}</p>
                  </div>
                ))}
              </div>
            </Popover>
          </div>

          <form className="">
            {selectedItem && (
              <div className="border-[1px]   border-black shadow-sm w-full rounded-[13px] p-3">
                {/* <h2 className="text-[14px] font-[600]">Alfafa Cubes:</h2> */}
                {selectedItem && (
                  <h2 className="text-[14px] font-[600]">{selectedItem}:</h2>
                )}
                <h3 className="text-[12px] font-[600] leading-[15px] py-1">
                  Quantity:
                </h3>
                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="i.e 1,2,7"
                    className="border-b outline-none"
                  ></input>
                  <div
                    onClick={handleColor}
                    className="flex items-center border-b"
                  >
                    <input
                      disabled={setColor ? true : false}
                      type="text"
                      placeholder="Select Fraction"
                      className="outline-none bg-white"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                    <AiFillCaretDown className="text-[#ADADAD]" />
                  </div>
                  <Popover
                    id={idColor}
                    open={openColor}
                    anchorEl={anchorColor}
                    onClose={handleCloseColor}
                    anchorOrigin={{
                      vertical: "bottom",
                      // horizontal: "left",
                    }}
                  >
                    <div className="bg-[#000032] breadScroll text-white w-[355px] h-auto overflow-y-auto py-2 px-5 font-[Quicksand]">
                      <h2 className="text-[18px] text-center font-[700]">
                        Select Fraction
                      </h2>
                      <hr />
                      {fraction.map((item, index) => (
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
                <h3 className="text-[12px] mt-5 font-[600] leading-[15px] py-1">
                  Units:
                </h3>
                <div
                  onClick={handleSex}
                  className="flex  items-center justify-between border-b"
                >
                  <input
                    disabled={selectedSex ? true : false}
                    type=" text"
                    value={selectedSex}
                    onChange={(e) => setSelectedSex(e.target.value)}
                    placeholder="Select Units"
                    className=" w-full outline-none bg-white"
                  />
                  <AiFillCaretDown className="text-[#ADADAD]" />
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
                  <div className="bg-[#000032] breadScroll  text-white w-[380px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                    <h2 className="text-[18px] text-center py-2 font-[700]">
                      Select Units
                    </h2>
                    <hr />
                    {units.map((item, index) => (
                      <div
                        className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                        key={index}
                      >
                        <input type="radio" />
                        <p
                          onClick={() => handleSelectSex(item.text)}
                          className="text-[16px] hover:text-yellow-600 font-[700] font-[]"
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Popover>
              </div>
            )}
           <div className="flex justify-between">
           <p className="text-[16px] mt-3   ml-4 h-5  w-full font-[600] text-[#2C3A4B]">
              Supplement
            </p>
          
           </div>
                        <textarea
              className="w-full mt-3 rounded-[10px] outline-none p-3 shadow-md h-24 border"
              placeholder={`Enter ${mealType} supplement...`}
            ></textarea>
            <div className="flex justify-between mt-3">
              <p className="text-[17px] font-[600]">Supplement Pack</p>
              <Switch {...label}  />
            </div>
            <button className="h-[55px] mt-3 text-white bg-[#000032] w-full text-[18px] font-[600] rounded-full">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedHarry;
