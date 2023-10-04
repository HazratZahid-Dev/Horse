import React, { useEffect, useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import Popover from "@mui/material/Popover";

import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { contactType } from "../../../config/Horses";
import { milktestProprties } from "../../../config/HorseDetail";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../../config/BaseUrl";
import { listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../config/firebase";

let token = localStorage.getItem("token");

const MilkTest = () => {
  const [HorseData, setHorseData] = useState([]);
  const location = useLocation();
  const data = location.state;
  const [SelectedHorse, setSelectedHorse] = useState("");
  const User = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    date: "",
    property: "",
    account: "",
    milkTestPh: "",
    price: "",
    development: "",
    attachments: null,
    comments: "",
  });

  useEffect(() => {
    if (data !== null) {
      const horsedata = JSON.parse(data);
      setSelectedHorse(
        horsedata.map((hd) => {
          return hd.id;
        })
      );
    }
  }, [data]);
  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        `${baseUrl}/addnewhorse-data/${User.data._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHorseData(response.data.horses);
    };
    FetchData();
  }, []);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handlePropertySelect = (property) => {
    setFormData({
      ...formData,
      property: property,
    });
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      attachments: event.target.files[0],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const imageName = v4();
    // const imageRef = storage.ref(`/milk-test/${imageName}`);

    try {
      // const snapshot = await imageRef.put();
      // const downloadURL = await snapshot.ref.getDownloadURL();
      // const response = await axios.post(
      //   `${baseUrl}/addnewhorse-data`,
      //   {
      //     neckName: formData.neckName,
      //     showName: formData.showName,
      //     owner: formData.owner,
      //     ownerId: formData.ownerId,
      //     billPayer: formData.billPayer,
      //     billPayerId: formData.billPayerId,
      //     bread: formData.breed,
      //     color: formData.color,
      //     sex: formData.sex,
      //     img: downloadURL,
      //     microchip: formData.chip,
      //     paddockLocation: formData.paddockLocation,
      //     stallNotes: formData.stallNotes,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      // if (response.status === 200) {
      //   // Reset form data and file input
      //   setFormData({
      //     neckName: "",
      //     showName: "",
      //     owner: "",
      //     ownerId: "",
      //     billPayer: "",
      //     billPayerId: "",
      //     breed: "",
      //     color: "",
      //     sex: "",
      //     chip: "",
      //     stallNumber: "",
      //     stallNotes: "",
      //     paddockName: "",
      //     paddockLocation: "",
      //     paddockNotes: "",
      //   });
      //   if (fileInputRef.current) {
      //     fileInputRef.current.value = ""; // Reset the value to an empty string
      //   }
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
          Add Milk Test
        </h2>

        <div className="px-10">
          <div className="w-full">
            <div className="w-[45%] ">
              <div className="w-full">
                <h2 className="w-full text-[20px] font-[700] ">
                  Selected Horse
                </h2>

                <div className="flex gap-x-3">
                  {HorseData.map((option) => {
                    if (SelectedHorse.includes(option._id))
                      return (
                        <div className="rounded-full mt-2 flex flex-col justify-center items-center">
                          <img
                            className="w-[39px] h-[39px] rounded-full object-fill"
                            src={option.img}
                          />
                          <p className="text-[10px] font-[600] text-center mt-1">
                            {option.showName}
                          </p>
                        </div>
                      );
                  })}
                </div>
              </div>
            </div>

            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add detail
              </h2>
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Date <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="date"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Milk Test Properties{" "}
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                      <input
                        type="text"
                        name="date"
                        // onChange={handleInputChange}
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                        className="outline-none w-full h-full"
                        value={formData.property || ""}
                        placeholder="Select"
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
                        {milktestProprties.map((property, index) => (
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
                      Account
                    </label>
                    <br />
                    <input
                      type="text"
                      name="account"
                      placeholder="Adam"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={formData.account}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Milk Test Ph
                    </label>
                    <br />
                    <input
                      type="text"
                      name="milkTestPh"
                      placeholder="Milk Test Ph"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={formData.milkTestPh}
                      onChange={handleInputChange}
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
                      name="price"
                      placeholder="Price"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Under Development
                    </label>
                    <br />
                    <input
                      type="text"
                      name="development"
                      placeholder="Under Development"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={formData.development}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className=" justify-between   w-[45%] mt-2   ">
                    <label className="px-1  py-3 text-[16px] font-[600]">
                      Add Attachments
                    </label>
                    <input
                      type="file"
                      name="attachments"
                      id="attachment"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className=" justify-between mt-1   w-[45%]  ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Comments
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Comment"
                      className="py-1 w-full border px-3 shadow-md mt-1 h-20 outline-none rounded-[10px] "
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#000032] w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                  // onClick={onSubmit}
                  onClick={(e) => e.preventDefault()}
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

export default MilkTest;
