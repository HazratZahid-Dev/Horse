import React from "react";
import { AiFillStar } from "react-icons/ai";
import { bronze } from "../../../config/HorseDetail";

const Silver = () => {
  return (
    <div className="w-[60%] space-y-2 pb-5 ">
     {
        bronze.map((items,index)=>(
            <div>
                <p className="flex gap-x-2 text-[16px] font-[600]">{items.star}{items.text}</p>
            </div>
        ))
     }
     <div className="space-y-5">
     <button className="text-[23px] mt-5 font-[600] w-full bg-gradient-to-r from-[#c9c8ce]  via-[#ccccccb1] to-[#c9c8ce] rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>
     <button className="text-[23px]  mt-6 font-[600] w-full bg-gradient-to-r from-[#c9c8ce]  via-[#ccccccb1] to-[#c9c8ce]  rounded-full flex flex-col items-center justify-center" type="button">Subscribe<span className="text-[15px] font-[600]">200$/Months</span></button>


     </div>

    </div>
  );
};

export default Silver;
