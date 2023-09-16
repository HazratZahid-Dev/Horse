 import React from "react";
import Sidebar from "../../Compunents/Sidebar";

const NewMedSupp = () => {
    return(
        <div className="flex">
            <Sidebar/>
            <div className="w-full">
                <h1 className="text-[30px] w-full py-3 font-[700] text-center">ADD MED/SUPPLEMENTS</h1>

                <div className="w-1/3 px-12 ">
                    <h1 className="font-[700] ">New MED/SUPPLEMENTS</h1>
                    <hr className="border-2 my-4"/>
                </div>

                <form className="w-full px-12">
                    <div className="w-[40%] pt-5">
                        <label className="px-[14px]  text-[16px] font-[600] ">
                          Med Name <span className="text-red-500 text-xl">*</span>
                        </label>
                        <br />
                        <input
                          type=" text"
                          placeholder="brand name"
                          className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                        ></input>
                        <br />

                        <div className="mt-5">
                            <label className="px-[14px]  text-[16px] font-[600] mt-5">
                              Drug Name <span className="text-red-500 text-xl">*</span>
                            </label>
                            <br />
                            <input
                              type=" text"
                              placeholder="name"
                              className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                            ></input>
                        </div>

                        <div className="mt-4"> 
                        <button
                           type="submit"
                           className="bg-[#000032]  mt-10 text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                         >
                           Save
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewMedSupp;