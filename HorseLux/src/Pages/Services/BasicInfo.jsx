import React, { useState } from "react";
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

const BasicInfo = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
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
  // Color
  const [selectedColor, setSelectedColor] = useState(""); // Changed the state name to selectedColor
  const [anchorColor, setAnchorColor] = useState(null);

  const handleColor = (event) => {
    setAnchorColor(event.currentTarget);
  };

  const handleCloseColor = () => {
    setAnchorColor(null);
  };
  const openColor = Boolean(anchorColor);
  const idColor = openColor ? "color-popover" : undefined; // Changed the ID to be unique

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setAnchorColor(null);
  };
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
                {/* <div className="flex flex-col"> */}
                {/* <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Breed
                    <span Show Name="text-red-500">
                      *
                    </span>
                  </label> */}

                <FormControl sx={{ mt: 4 }} size="small">
                  <InputLabel id="demo-select-small-label">Breed</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={values.breed}
                    label="Breed"
                    name="breed"
                    onChange={handleChange}
                    className="h-72 breadScroll"
                    sx={{ height: 44, borderRadius: 3 }}
                    MenuProps={{
                      style: {
                        maxHeight: 400,
                      },
                    }}
                    inputProps={{
        sx: {
          "&.MuiOutlinedInput-input:hover": {
            border: "2px solid green"
          }
        }
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

                {/* <div
                    onClick={handleClick}
                    className="flex items-center justify-between border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  >
                    <Field
                      type="text"
                      name="breed"
                      placeholder="Breed"
                      className="outline-none w-full"
                      value={selectedBreed}
                      onChange={(e) => {
                        setSelectedBreed(e.target.value); // Update the selectedBreed state
                        setFieldValue("breed", e.target.value); // Set the form field value
                      }}
                    />
                    <button type="button" className=" text-xl outline-none">
                      <AiFillCaretDown />
                    </button>
                  </div>
                  <Popover
                    id={id}
                    open={open}
                    onChange={handleChange}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    className="mt-2"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div className="bg-[#000032] breadScroll text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                      <h2 className="text-[18px] font-[700]">
                        Select Horse Breed
                      </h2>
                      <hr />
                      {popOver.map((item, index) => (
                        <div
                          onClick={() => handleBreedSelect(item.text)}
                          className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                          key={index}
                        >
                          <input type="radio" />
                          <p
                            onClick={() => handleBreedSelect(item.text)}
                            className="text-[16px] font-[700] font-[Quicksand]"
                          >
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Popover> */}
                {/* </div> */}
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Color <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={handleColor}
                    className="flex items-center justify-between border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  >
                    <Field
                      name="color"
                      disabled={selectedColor ? true : false}
                      type="text"
                      placeholder="Color"
                      className="outline-none bg-white"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <button type="button" className=" text-xl outline-none">
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
                    <div className="bg-[#000032] breadScroll text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                      <h2 className="text-[18px] font-[700]">
                        Select Horse Breed
                      </h2>
                      <hr />
                      {HorseColor.map((item, index) => (
                        <div
                          onClick={() => handleSelectColor(item.text)}
                          className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                          key={index}
                        >
                          <input type="radio" />
                          <p className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-5">
                <div className="flex flex-col">
                  <label className="text-[16px] py-1 px-2 font-[600] text-[#2C3A4B]">
                    Sex <span className="text-red-500">*</span>
                  </label>
                  <div
                    onClick={handleSex}
                    className=" flex items-center justify-between border outline-none h-[44px] rounded-[10px] py-1 px-2 shadow-md"
                  >
                    <Field
                      name="sex"
                      disabled={selectedSex ? true : false}
                      type=" text"
                      value={selectedSex}
                      onChange={(e) => setSelectedSex(e.target.value)}
                      placeholder="Sex"
                      className=" w-full bg-white outline-none"
                    ></Field>
                    <button type="button" className=" text-xl">
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
                    <div className="bg-[#000032] breadScroll  text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                      <h2 className="text-[18px] font-[700]">
                        Select Horse Breed
                      </h2>
                      <hr />
                      {sex.map((item, index) => (
                        <div
                          onClick={() => handleSelectSex(item.text)}
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
                    Microchip{" "}
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
