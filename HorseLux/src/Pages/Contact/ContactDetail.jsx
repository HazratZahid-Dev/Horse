import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Sidebar from "../../Compunents/Sidebar";
import { addContactType, addDiognostic } from "../../config/Horses";
import { Popover } from "@mui/material";
import '../../Style/Scrollbar.css'



const ContactDetail = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");


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
    
    return(


        <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full  font-[700] px-12 mt-5">
            Add Contact
            <hr className="mt-2 px-12 " />
        </h2>
       

        <div className="px-10">
          <div className="w-full">
            <div className="w-full">
             
              <form className="w-full">


                <div className="flex justify-between  ">
                  <div className="w-[45%] pt-2">
                    <label className="px-[20px]  text-[14px] font-[600] ">
                      Contact Type <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div aria-describedby={id} variant="contained" onClick={handleClick} className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                        <input
                          variant="contained"
                          className="outline-none w-full h-full"
                          type=" text"
                          placeholder="Choose..."
                          value={selectedBreed}
                onChange={(e) => setSelectedBreed(e.target.value)}
                        ></input>
                       <AiFillCaretRight className="text-2xl text-gray-500" />
           
                     </div>
                     <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                className="mt-2"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <div className="bg-[#000032] breadScroll text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                  <h2 className="text-[18px] text-center py-1 font-[700]">Select Diagnostic Records</h2>
                  <hr />
                  {addContactType.map((item, index) => (
                    <div className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer" key={index}>
                      <input type="radio" />
                      <p onClick={() => handleBreedSelect(item.text)} className="text-[16px] font-[700] font-[Quicksand]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </Popover>
                  </div>  
                </div>

                {/* <div className="mt-10"> */}
                <h2 className="text-[30px] w-full  font-[700]  mt-5">
                     Contact Information
                     <hr className="mt-2 px-12 " />
                </h2>
                {/* </div> */}

                <div className="flex justify-between mt-2  ">
                
                  <div className="w-[45%] pt-2">
                    <label className="px-[20px]  text-[14px] font-[600] ">
                      Title <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                        <input
                          variant="contained"
                          className="outline-none w-full h-full"
                          type=" text"
                          placeholder="Choose..."
                        ></input>
                       <AiFillCaretRight className="text-2xl text-gray-500" />
                     </div>
 
                </div>

                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Primary Phone
                    </label>
                    <br />
                    <input
                     type="text"
              
                      placeholder="+44832938298921"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <div className="w-[45%] pt-2">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      First Name
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="Adam"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Email
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="adamsmith@gmail.com"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>

                <div className="flex justify-between  pt-2">
                  <div className="w-[45%] pt-2">
                    <label className="px-[14px]  text-[14px] font-[600] ">
                      Last Name <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                        <input
                          variant="contained"
                          className="outline-none w-full h-full"
                          type=" text"
                          placeholder="Smith"
                        ></input>
                     </div>
                  </div>  
                </div>
               
                <button
                  type="submit"
                  className="bg-[#000032] w-[45%] mt-5 text-white px-8 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default ContactDetail;




 {/* <div className="w-full"> */}

        {/* <div className="px-12 pt-8 ">
            <h1 className="text-[30px] font-[700]">Add Contact</h1>
            <hr />
        </div> */}

        {/* <div className="px-12 mt-3 w-[50%]">
            <label htmlFor="" className="pl-4 font-[500] text-gray-500">Contact Type <span className="text-red-500 text-xl">*</span></label>
            <input
              type=" text"
              placeholder="$Price"
              className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
            ></input>
        </div> */}
      {/* </div> */}