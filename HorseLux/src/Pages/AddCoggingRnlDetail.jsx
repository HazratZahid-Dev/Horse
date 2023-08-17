import React, { useState } from 'react'
import Sidebar from '../Compunents/Sidebar'
import h1 from "../Images/h1.png";
import { AiOutlinePlus } from 'react-icons/ai';

const AddCoggingRnlDetail = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-full'>
        <div className="text-[30px] py-2 font-[700] text-center">
          Add Cogging Renewal
        </div>
        <div className='w-1/2 p-10'>
     
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
          <h2 className="w-full text-[20px] font-[700] py-2 mt-3">
                Add Detail
              </h2>

              <div className="w-full mt-2 ">
                    <label className="px-[14px]  text-[16px] font-[600] ">
                      Date
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-full mt-2">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Next Due Date
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="22-jun-2023"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                   
                <div className=" justify-between   w-[45%] mt-3
                  ">
                <label className="px-1  py-3 text-[16px] font-[600] ">
                      Add Attachments
                    </label>
                  <div className="flex items-center mt-1 ">
               
                    <label htmlFor="fileInput" className="custom-file-upload border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2">
                      <AiOutlinePlus/>Add Attachments
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {selectedFile && (
                      <button className=" text-[12px] font-[600] ml-2"> {selectedFile.name}</button>
                    )}
                  </div>
                </div>
          <button  className="bg-[#000032] mt-5 text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]">Save</button>

        </div>

        </div>
    </div>
  )
}

export default AddCoggingRnlDetail