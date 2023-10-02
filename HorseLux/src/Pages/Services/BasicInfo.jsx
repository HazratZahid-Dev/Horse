import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import { listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../config/firebase";
import FormLoader from "../../Compunents/Loader/FormLoader";
import { HorseColor, popOver, sex } from "../../config/Horses";
import { FormControl } from "@mui/material";
import { current } from "@reduxjs/toolkit";
import { useLocation, useNavigate } from "react-router-dom";

let token = localStorage.getItem("token");
let user = localStorage.getItem("user");

const BasicInfo = ({ id }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const data = params.get('data');
  console.log(JSON.parse(data));

  useEffect(()=>{
    if(data !== null){
      setFormData(JSON.parse(data))
    }
  },[])

  const navigate = useNavigate();
  const imageListRef = ref(storage, "horses/");
  const fileInputRef = useRef(null);
  const [AddingLoader, setAddingLoader] = useState(false);

  const [formData, setFormData] = useState({
    neckName: "",
    showName: "",
    owner: "",
    billPayer: "",
    breed: "",
    color: "",
    sex: "",
    chip: "",
    stallNumber: "",
    stallNotes: "",
    paddockName: "",
    paddockLocation: "",
    paddockNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setAddingLoader(true);
    if (selectedFile === null) return;
    const imageName = v4();
    const imageRef = storage.ref(`/horses/${imageName}`);
    try {
      const snapshot = await imageRef.put(selectedFile);
      const downloadURL = await snapshot.ref.getDownloadURL();
      const response = await axios.post(
        `${baseUrl}/addnewhorse-data`,
        {
          neckName: formData.neckName,
          showName: formData.showName,
          owner: formData.owner,
          ownerId: "1234",
          billPayer: formData.billPayer,
          billPayerId: "5678",
          bread: formData.breed,
          color: formData.color,
          sex: formData.sex,
          img: downloadURL,
          microchip: formData.chip,
          paddockLocation: formData.paddockLocation,
          stallNotes: formData.stallNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        // Reset form data and file input
        setFormData({
          neckName: "",
          showName: "",
          owner: "",
          billPayer: "",
          breed: "",
          color: "",
          sex: "",
          chip: "",
          stallNumber: "",
          stallNotes: "",
          paddockName: "",
          paddockLocation: "",
          paddockNotes: "",
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset the value to an empty string
        }
      }
    } catch (err) {
      console.log(err);
    }
    setAddingLoader(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-5 py-3">
        <h1 className="text-[20px] w-full text-[#000032] font-[700] text-center font-[Quicksand]">
          Basic Info
        </h1>

        <form onSubmit={HandleSubmit} className="flex flex-col gap-y-2">
          <div className="grid grid-cols-3 gap-x-5">
            <div className="flex flex-col">
              <label className="text-[16px] px-2 py-1 font-[600] text-[#2C3A4B]">
                Neck Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="neckName"
                placeholder="Neck Name"
                value={formData.neckName}
                onChange={handleInputChange}
                className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Show Name <span className="text-red-500">*</span>
              </label>
              <input
                name="showName"
                type="text"
                placeholder="Show Name"
                value={formData.showName}
                onChange={handleInputChange}
                className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Owner{" "}
              </label>
              <input
                type="text"
                autofill="false"
                name="owner"
                placeholder="Owner"
                value={formData.owner}
                onChange={handleInputChange}
                onClick={() =>
                  navigate(
                    `/contact?data=${JSON.stringify({
                      ...formData,
                      filter: false,
                    })}`
                  )
                }
                className="border outline-none h-[44px] bg-white rounded-[10px] py-1 px-2 shadow-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-x-5">
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Bill Payer{" "}
              </label>
              <input
                type="text"
                name="billPayer"
                placeholder="Neck Name"
                value={formData.billPayer}
                onChange={handleInputChange}
                className="border outline-none bg-white  h-[44px] rounded-[10px] py-1 px-2 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Breed <span className="text-red-500">*</span>
              </label>
              <FormControl size="small">
                <select
                  name="breed"
                  value={formData.breed}
                  onChange={handleInputChange}
                  className="border h-[44px] shadow-md breadScroll outline-none rounded-[10px] px-2 py-1"
                >
                  <option
                    value=""
                    className="text-center bg-[#000032] text-white font-bold"
                  >
                    Select Breed
                  </option>
                  {popOver.map((items, index) => (
                    <option
                      key={index}
                      value={items.text}
                      style={{
                        backgroundColor: "#000032",
                        color: "white",
                        fontFamily: "quicksand",
                        textSizeAdjust: 18,
                        fontWeight: "700",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {items.text}
                    </option>
                  ))}
                </select>
              </FormControl>
            </div>

            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Color <span className="text-red-500">*</span>
              </label>
              <FormControl sx={{}} size="small">
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  className="border h-[44px] shadow-md breadScroll outline-none rounded-[10px] px-2 py-1"
                >
                  <option
                    value=""
                    className="text-center bg-[#000032] text-white font-bold"
                  >
                    Select Color
                  </option>
                  {HorseColor.map((items, index) => (
                    <option
                      key={index}
                      value={items.text}
                      style={{
                        backgroundColor: "#000032",
                        color: "white",
                        fontFamily: "quicksand",
                        textSizeAdjust: 18,
                        fontWeight: "700",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {items.text}
                    </option>
                  ))}
                </select>
              </FormControl>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-5">
            <div className=" flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Sex <span className="text-red-500">*</span>
              </label>
              <FormControl size="small" className="rounded-[10px]">
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                  className="border h-[44px] breadScroll shadow-md outline-none rounded-[10px] px-2 py-1"
                >
                  <option
                    value=""
                    className="text-center bg-[#000032] text-white font-bold"
                  >
                    Select Horse Sex
                  </option>
                  {sex.map((items, index) => (
                    <option
                      key={index}
                      value={items.text}
                      style={{
                        backgroundColor: "#000032",
                        color: "white",
                        fontFamily: "quicksand",
                        textSizeAdjust: 18,
                        fontWeight: "700",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      {items.text}
                    </option>
                  ))}
                </select>
              </FormControl>
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Photo <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="flex items-center justify-center outline-none h-[44px] rounded-[10px] py-1 px-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                Microchip
              </label>
              <input
                name="chip"
                type="text"
                placeholder="Microchip"
                value={formData.chip}
                onChange={handleInputChange}
                className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[20px] w-full text-[#000032] font-[700] text-center font-[Quicksand]">
              Stall
            </h1>

            <div className="grid grid-cols-3 gap-x-5">
              <div className="flex flex-col">
                <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                  Stall Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stallNumber"
                  placeholder="Stall Number"
                  value={formData.stallNumber}
                  onChange={handleInputChange}
                  className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                  Stall Notes <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stallNotes"
                  placeholder="Stall Notes"
                  value={formData.stallNotes}
                  onChange={handleInputChange}
                  className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[20px] w-full text-[#000032] font-[700] text-center font-[Quicksand]">
              PADDOCK
            </h1>

            <div className="grid grid-cols-3 gap-x-5">
              <div className="flex flex-col">
                <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                  Paddock Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="paddockName"
                  placeholder="Paddock Name"
                  value={formData.paddockName}
                  onChange={handleInputChange}
                  className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                  Paddock Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="paddockLocation"
                  placeholder="Paddock Location"
                  value={formData.paddockLocation}
                  onChange={handleInputChange}
                  className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                  Paddock Notes
                </label>
                <input
                  type="text"
                  name="paddockNotes"
                  placeholder="Paddock Notes"
                  value={formData.paddockNotes}
                  onChange={handleInputChange}
                  className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            {AddingLoader ? (
              <FormLoader />
            ) : (
              <button
                type="submit"
                className="bg-[#000032] w-[382px] text-[18px] font-[600] font-[Source Sans Pro] h-[55px] rounded-full text-white"
              >
                Add
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;
