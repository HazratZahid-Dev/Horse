import React from "react";
import { AiFillStar } from "react-icons/ai";
import { bronze } from "../../../config/HorseDetail";

const Bronze = () => {
  return (
    <div className="w-[60%] pb-5 space-y-2 ">
     {
        bronze.map((items,index)=>(
            <div>
                <p className="flex gap-x-2 text-[16px] font-[600]">{items.star}{items.text}</p>
            </div>
        ))
     }
     <div className="space-y-5">
     <button className="text-[23px] mt-5 font-[600] w-full bg-gradient-to-r from-[#a65f18]  via-[#ca8a49] to-[#a65f18] rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>
     <button className="text-[23px] mt-6   font-[600] w-full bg-gradient-to-r from-[#a65f18]  via-[#ca8a49] to-[#a65f18]  rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>

     </div>

    </div>
  );
};

export default Bronze;
