import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import h1 from "../Images/h1.png";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { contactType } from "../config/Horses";

const Contact = () => {
  // const { index } = useParams();
 
  const { index, price } = useParams();

  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };

  const [selectedFile, setSelectedFile] = useState(null);

 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
        Add Contact
        </h2>

        <div className="px-10">
          <div className="w-full">
          <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Contact type
                    </label>
                    <br />
                    <div
                      className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"

                     >
                    <input 
                    aria-describedby={id} variant="contained" onClick={handleClick}
                    className="outline-none w-full h-full"
                      type=" text"
                      placeholder="Choose"
                    ></input>
                    <AiFillCaretRight className="text-2xl text-gray-300"/>
                    </div>
                
                   <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // style={{ width: '' }}
        sx={{ width: '1000px' }}

      >
      <div className=" bg-[#000032] text-white h-72  overflow-y-auto w-96  " >
        {
            contactType.map((items,index)=>(
                 <div className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer" key={index}>
                      <input type="radio" />
                      <p  className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
                        {items.contactType}
                      </p>
                    </div>
            ))
        }
      </div>
      </Popover>
                   
                   
                  </div>
           
            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Contact Information
              </h2>
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Titlle
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                    Primary Phone
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="+44 323245658790"
                      className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      First Name
                    </label>
                    <br />
                    <input
                     type="text"
                //   onChange={handleQuantityChange}
                //   value={quantity}
                      placeholder="Adam"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Email
                    </label>
                    <br />
                    <input
                     type="text"
                //   onChange={handleQuantityChange}
                //   value={quantity}
                      placeholder="adamsmith@gmail.com"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Last Name
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="Smith"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                 
                </div>

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
                <div className=" justify-between   w-[45%]  "></div>
                <button
                  type="submit"
                  onClick={toHome}
                  className="bg-[#000032] w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
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

export default Contact;
