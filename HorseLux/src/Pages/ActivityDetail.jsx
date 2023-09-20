import React from "react";
import Sidebar from "../Compunents/Sidebar";
import { AiFillCaretRight } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import { BsFillTrash3Fill } from "react-icons/bs";
import horse from "../Images/h1.png";

const ActivityDetail = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-20  ">
        <div className="border p-5 shadow-md rounded-[50px]">
          <div className="w-full flex items-center  justify-between ">
            <div>
              <FiChevronLeft className="text-xl" />
            </div>
            <h2 className="text-[20px]   font-[700] ">Deworming</h2>
            <div>
              <BsFillTrash3Fill />
            </div>
          </div>
          <hr className="mt-2 px-12 " />
          <h3 className="text-[24px] font-[700]">DETAILS</h3>

          <form className="w-full flex flex-col xl:flex-row gap-x-12">
            <div className="xl:w-1/2">
              <div className=" pt-2">
                <label className="px-[20px]  text-[14px] font-[600] ">
                  Date <span className="text-red-500 text-xl">*</span>
                </label>
                <br />
                <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                  <input
                    variant="contained"
                    className="outline-none w-full h-full"
                    type=" text"
                    placeholder="26-june-2023"
                  ></input>
                </div>
              </div>
              <div className=" pt-2">
                <label className="px-[14px]   text-[16px] font-[600] ">
                  Next Due Date <span className="text-red-500 text-xl">*</span>
                </label>
                <br />
                <input
                  type=" text"
                  placeholder="26-july-2023"
                  className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                ></input>
              </div>
              <div className=" pt-2">
                <label className="px-[14px]  text-[14px] font-[600] ">
                  Type <span className="text-red-500 text-xl">*</span>
                </label>
                <br />
                <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                  <input
                    variant="contained"
                    className="outline-none w-full h-full"
                    type=" text"
                    placeholder="anthelcide eq - oxidendalzole"
                  ></input>
                </div>
              </div>
              <div className=" pt-2">
                <label className="px-[14px]  text-[14px] font-[600] ">
                  Administrated By{" "}
                  <span className="text-red-500 text-xl">*</span>
                </label>
                <br />
                <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                  <input
                    variant="contained"
                    className="outline-none w-full h-full"
                    type=" text"
                    placeholder="Select Dentist..."
                  ></input>
                </div>
                <button className="h-[55px] mt-5 text-white bg-[#000032] w-full text-[18px] font-[600] rounded-full">
                  Save
                </button>
              </div>
            </div>
            <div className="xl:w-1/2 mt-[11px]">
              <div className="">
                <label className="px-[14px]   text-[16px] font-[600] ">
                  Price
                </label>
                <br />
                <input
                  type="text"
                  placeholder="200$"
                  className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                ></input>
              </div>
              <div className="mt-[5px] ">
                <label className="px-[14px] mt-2   text-[16px] font-[600] ">
                  Comments
                </label>
                <br />
                <textarea
                  type=" text"
                  placeholder="Comments..."
                  className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                ></textarea>
              </div>
              <div className=" pt-2">
                <label className="px-[14px]  text-[14px] font-[600] ">
                  Attachments
                </label>
                <br />
                <img
                  src={horse}
                  className="w-[90%] mt-1 h-[180px] rounded-[15px] mr-[40px]"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
