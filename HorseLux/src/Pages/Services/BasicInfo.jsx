import React, { useEffect, useState } from "react";
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
let token=localStorage.getItem("token")
let user=localStorage.getItem("user")
console.log(token);
console.log(JSON.parse(user));
const BasicInfo = ({id}) => {
// const getData=async (req, res)=>{
// let data =await axios.post("url",body,{
//   headers:{
//   Authorisation: `Bearer ${token}`
//   }
// })
// }

//   useEffect(()=>{
// getData()
//   },[])
  // const header:{
  // heaerid:"r34534646"
  // }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-5 py-3">
        <h1 className="text-[20px] w-full text-[#000032] font-[700] text-center font-[Quicksand]">
          Basic Info
        </h1>
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
          onSubmit={(values) => {
            console.log(values);
          }}
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
                    name="file"
                    accept="image/*"
                    className="flex items-center justify-center outline-none h-[44px] rounded-[10px] py-1 px-2"
                    onChange={(e) => {
                      setFieldValue("file", e.currentTarget.value);
                    }}
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
                <button
                  type="submit"
                  className="bg-[#000032] w-[382px] text-[18px] font-[600] font-[Source Sans Pro] h-[55px] rounded-full text-white"
                >
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BasicInfo;
