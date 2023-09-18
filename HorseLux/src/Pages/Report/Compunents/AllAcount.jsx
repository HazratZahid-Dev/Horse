import React from 'react'
import data from '../../../config/Data'
import { BsSearch } from 'react-icons/bs'
import { contactData } from '../../../config/Horses'

const AllAcount = () => {
  return (
    <div className="w-[40%]">
      <div className="flex items-center  mt-5 justify-between">
        <h3 className="text-[20px] font-[700] ">Select Contact</h3>
        <div className="flex gap-x-2">
          <label className="text-[15px] font-[600]">Select all</label>
          <input type="radio" />
        </div>
      </div>
      <div className="flex h-[45px] bg-[#F4F6F9] mt-5 w-full items-center justify-between border shadow-sm rounded-3xl px-4">
        <input
          type="text"
          className="outline-none bg-[#F4F6F9] w-full"
          placeholder="Search"
        ></input>
        <BsSearch className="w-[24px] h-[24px] text-[#858C94]" />
      </div>
      <div className=" space-y-3 mt-5">
        {contactData.map((items) => (
          <>
            <div className="flex items-center gap-x-3">
              <div className="w-full flex justify-between">
                <div>
                  <p className="text-[16px] font-[700]">{items.name}</p>
                 
                </div>
                <input type="radio" />
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <div className="flex justify-end">
     <button className="bg-[#D2AC47] mt-5 font-[600] text-black w-[83px] text-center h-[44px] rounded-[14px] text-[19px] border-[2px] border-black">
        Done
      </button>
     </div>
    </div>
  )
}

export default AllAcount