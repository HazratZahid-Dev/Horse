import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import h1 from "../../Images/h1.png";
import Sidebar from "../../Compunents/Sidebar";
import data from "../../config/Data";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { baseUrl } from "../../config/BaseUrl";
import axios from "axios";

let token = localStorage.getItem("token");
const HorseSelection = ({ headingText, navigateTo }) => {
  const [HorseData, setHorseData] = useState([]);
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const toggleSelectAll = (e) => {
    console.log(e.target);
    if (selectAll) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(data.map((option) => option.name));
    }
    setSelectAll(!selectAll);
  };
  const handleOptionChange = (event) => {
    const optionValue = event.target.value;

    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };
  const FetchData = async () => {
    const response = await axios.get(
      `https://hurseluxprojectupdate-production.up.railway.app/addnewhorse-data/64d38f949ed7fb061dc22c70`,
      {
        headers: {
          "Content-Type": "application/json", // Adjust the content type as needed
          Authorization: "Bearer YourAccessToken", // Add any custom headers you need
        },
      }
    );
    console.log("Response", response);
    // console.log(response.data);
  };

  FetchData();

  return (
    <div className="flex">
      <Sidebar />
      {/* main container */}
      <div className="w-full p-5">
        {/* Header */}
        <div>
          <h2 className="text-[30px] font-[700] text-center">{headingText}</h2>
        </div>
        <div className="w-1/2">
          <div className="w-full">
            <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

            <div className="w-[39px] h-[39px] rounded-full mt-2 ">
              <img
                className="h-full w-full rounded-full object-fill"
                src={h1}
              />
              <p className="text-[10px] font-[600] text-center mt-1">Ferrier</p>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="flex items-center  mt-5 justify-between">
            <h3 className="text-[20px] font-[700] ">Select Horse</h3>
            
          </div>
          <div className="flex h-[45px] bg-[#F4F6F9] mt-5 w-full items-center justify-between border shadow-sm rounded-3xl px-4">
            <input
              type="text"
              className="outline-none bg-[#F4F6F9] w-full"
              placeholder="Search"
            ></input>
            <BsSearch className="w-[24px] h-[24px] text-[#858C94]" />
          </div>
          <div className=" space-y-3 mt-5">
            {data.map((items) => (
              <>
                <div className="flex items-center gap-x-3">
                  <img
                    src={items.img}
                    className="w-[65px] h-[65px] rounded-full"
                  />
                  <div className="w-full flex justify-between">
                    <div>
                      <p className="text-[15px] font-[600]">{items.name}</p>
                      <p className="text-[10px] font-[600] ">
                        <span>Owner</span>
                        {items.onwer}
                      </p>
                    </div>
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon style={{fontSize:"1.3rem"}} />}
                      checkedIcon={<RadioButtonCheckedIcon style={{fontSize:"1.3rem"}} />}
                      value={items.name}
                      onChange={handleOptionChange}
                      checked={selectedOptions.includes(items.name)}
                    />
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
          <button
            onClick={() => navigate(navigateTo)}
            className="bg-[#000032] mt-5 text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
          >
            Next
          </button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default HorseSelection;
