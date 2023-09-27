import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { HorseColor, popOver, sex } from "../../config/Horses";
// import Button from '@mui/material/Button';
import { AiFillCaretDown } from "react-icons/ai";
import "../../Style/Scrollbar.css";
import { Formik, Field, Form } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import { listAll, ref, uploadBytes } from "firebase/storage";
// import { storage } from "../../config/firebase";
import { v4 } from "uuid";
import { storage } from "../../config/firebase";
import FormLoader from "../../Compunents/Loader/FormLoader";
// import { storage } from "../../config/firebase";

let token = localStorage.getItem("token");
let user = localStorage.getItem("user");
const BasicInfo = ({ id }) => {
  const imageListRef = ref(storage, "horses/");
  const fileInputRef = useRef(null);
  const [AddingLoader, setAddingLoader] = useState(false);

  const HandleSubmit = async (values, { resetForm }) => {
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
          neckName: values.neckName,
          showName: values.showName,
          owner: values.owner,
          ownerId: "1234",
          billPayer: values.billPayer,
          billPayerId: "5678",
          bread: values.breed,
          color: values.color,
          sex: values.sex,
          img: downloadURL,
          microchip: values.chip,
          paddockLocation: values.paddockLocation,
          stallNotes: values.stallNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        resetForm();
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // Reset the value to an empty string
        }
      }
    } catch (err) {
      console.log(err);
    }
    setAddingLoader(false);
  };

  {
    /* testing */
  }
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-5 py-3">
        <h1 className="text-[20px] w-full text-[#000032] font-[700] text-center font-[Quicksand]">
          Basic Info
        </h1>
        {/* testing */}

        <Formik
          initialValues={{
            neckName: "",
            showName: "",
            owner: "",
            billPayer: "",
            breed: "",
            color: "",
            sex: "",
            file: null,
            chip: "",
            stallNumber: "",
            stallNotes: "",
            paddockName: "",
            paddockLocation: "",
            paddockNotes: "",
          }}
          onSubmit={HandleSubmit}
        >
          {({ handleSubmit, setFieldValue, handleChange, values }) => (
            <Form className="flex flex-col gap-y-2">
              <div className="grid grid-cols-3 gap-x-5">
                <div className="flex flex-col">
                  <label className="text-[16px] px-2 py-1 font-[600] text-[#2C3A4B]">
                    Neck Name <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type=" text"
                    name="neckName"
                    placeholder="Neck Name"
                    className="border outline-none  h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  ></Field>
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Show Name <span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="showName"
                    type=" text"
                    placeholder="Show Name"
                    className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  ></Field>
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Owner{" "}
                  </label>
                  <Field
                    type=" text"
                    autofill="false"
                    name="owner"
                    placeholder="Owner"
                    className="border outline-none h-[44px] bg-white rounded-[10px] py-1 px-2 shadow-md"
                  ></Field>
                </div>
              </div>
              <div className="grid grid-cols-3 items-center gap-x-5">
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Bill Payer{" "}
                  </label>
                  <Field
                    type=" text"
                    name="billPayer"
                    placeholder="Neck Name"
                    className="border outline-none bg-white  h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  ></Field>
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Breed <span className="text-red-500">*</span>
                  </label>
                  <FormControl size="small">
                    <InputLabel id="demo-select-small-label">Breed</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={values.breed}
                      label="Breed"
                      name="breed"
                      onChange={handleChange}
                      className="h-72 shadow-md breadScroll"
                      sx={{ height: 44, borderRadius: 3 }}
                      MenuProps={{
                        style: {
                          maxHeight: 400,
                        },
                      }}
                    >
                      <MenuItem
                        className="custom-menu-item"
                        sx={{
                          bgcolor: "#000032",
                          color: "white",
                        }}
                        value=""
                      >
                        <em className="border-b-2 w-full text-center">
                          Select Breed
                        </em>
                      </MenuItem>
                      {/* <div className="h-72 breadScroll"> */}
                      {popOver.map((items, index) => (
                        <MenuItem
                          sx={{
                            bgcolor: "#000032",
                            color: "white",
                            fontFamily: "quicksand",
                            textSizeAdjust: 18,
                            fontWeight: "700",
                            display: "flex",
                            gap: 1,
                          }}
                          value={items.text}
                        >
                          {items.text}
                        </MenuItem>
                      ))}
                      {/* </div> */}
                    </Select>
                  </FormControl>
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Color <span className="text-red-500">*</span>
                  </label>
                  <FormControl sx={{}} size="small">
                    <InputLabel id="demo-select-small-label">Color</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={values.color}
                      label="color"
                      name="color"
                      onChange={handleChange}
                      className="h-72 shadow-md breadScroll"
                      sx={{ height: 44, borderRadius: 3 }}
                      MenuProps={{
                        style: {
                          maxHeight: 400,
                        },
                      }}
                    >
                      <MenuItem
                        className="custom-menu-item"
                        sx={{
                          bgcolor: "#000032",
                          color: "white",
                        }}
                        value=""
                      >
                        <em className="border-b-2  w-full text-center">
                          Select Breed
                        </em>
                      </MenuItem>
                      {/* <div className="h-72 breadScroll"> */}
                      {HorseColor.map((items, index) => (
                        <MenuItem
                          sx={{
                            bgcolor: "#000032",
                            color: "white",
                            fontFamily: "quicksand",
                            textSizeAdjust: 18,
                            fontWeight: "700",
                            display: "flex",
                            gap: 1,
                          }}
                          value={items.text}
                        >
                          {items.text}
                        </MenuItem>
                      ))}
                      {/* </div> */}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-5">
                <div className=" flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Color <span className="text-red-500">*</span>
                  </label>
                  <FormControl size="small">
                    <InputLabel id="demo-select-small-label">Sex</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={values.sex}
                      label="Sex"
                      name="sex"
                      onChange={handleChange}
                      className="h-72 breadScroll shadow-md"
                      sx={{
                        height: 44,
                        backgroundColor: "[#000032]",
                        borderRadius: 3,
                      }}
                      MenuProps={{
                        style: {
                          maxHeight: 400,
                        },
                      }}
                    >
                      <MenuItem
                        className="custom-menu-item"
                        sx={{
                          bgcolor: "#000032",
                          color: "white",
                        }}
                        value=""
                      >
                        <em className="border-b-2 bg-[#00032] font-[] w-full text-center">
                          Select Horse Sex
                        </em>
                      </MenuItem>
                      {/* <div className="h-72 breadScroll"> */}
                      {sex.map((items, index) => (
                        <MenuItem
                          sx={{
                            bgcolor: "#000032",
                            color: "white",
                            fontFamily: "quicksand",
                            textSizeAdjust: 18,
                            fontWeight: "700",
                            display: "flex",
                            gap: 1,
                          }}
                          value={items.text}
                        >
                          {items.text}
                        </MenuItem>
                      ))}
                      {/* </div> */}
                    </Select>
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
                  <Field
                    name="chip"
                    type=" text"
                    placeholder="Microchip"
                    className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  ></Field>
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
                    <Field
                      type=" text"
                      name="stallNumber"
                      placeholder="Neck Name"
                      className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                    ></Field>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                      Stall Notes <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type=" text"
                      name="stallNotes"
                      placeholder="Show Name"
                      className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                    ></Field>
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
                    <Field
                      type=" text"
                      name="paddockName"
                      placeholder="Neck Name"
                      className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                    ></Field>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                      Paddock Location <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type=" text"
                      name="paddockLocation"
                      placeholder="Show Name"
                      className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                    ></Field>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                      Paddock Notes
                    </label>
                    <Field
                      type=" text"
                      name="paddockNotes"
                      placeholder="Show Name"
                      className="border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                    ></Field>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BasicInfo;
