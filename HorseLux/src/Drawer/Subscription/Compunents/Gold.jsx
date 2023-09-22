import React from "react";
import { bronze } from "../../../config/HorseDetail";

const Gold = () => {
  return (
    <div className="w-[60%] pb-5 space-y-2 ">
     {
        bronze.map((items,index)=>(
            <div className="">
                <p className="flex gap-x-2 text-[16px] font-[600]">{items.star}{items.text}</p>
            </div>
        ))
     }
     <div className="space-y-5">
     <button className="text-[23px] mt-5 font-[600] w-full bg-gradient-to-r from-[#AE8625]  via-[#cfc973] to-[#AE8625] rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>
     <button className="text-[23px]  mt-6 font-[600] w-full bg-gradient-to-r from-[#AE8625]  via-[#cfc973] to-[#AE8625]  rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>
     </div>
     

    </div>
  );
};

export default Gold;
