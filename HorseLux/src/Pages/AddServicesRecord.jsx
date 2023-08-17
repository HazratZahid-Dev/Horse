import React from "react";
import Sidebar from "../Compunents/Sidebar";
import h1 from "../Images/h1.png";
import { addservicesData } from "../config/Horses";
import { useNavigate } from "react-router-dom";

const AddServicesRecord = () => {
  const navigate=useNavigate()
  const toBodyclip = (index) => {
    console.log("Clicked on index:", index);
    navigate(`/bodyclip/${index}`);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full">
        <h1 className="text-[30px] mst-1 font-[700] text-center">
          Add Services Record
        </h1>
        <div className="p-10">
          <div className="w-1/2">
            <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

            <div className="w-[39px] h-[39px] rounded-full mt-2 ">
              <img
                className="h-full w-full rounded-full object-fill"
                src={h1}
              />
              <p className="text-[10px] font-[600] text-center mt-1">Ferrier</p>
            </div>
          </div>
          <hr className="w-1/2 mt-6" />
          <div className="flex  gap-x-12">
            <div className="w-1/2 mt-5 space-y-3">
              {addservicesData.slice(0, 9).map((items, index) => (
                <div  className="w-full space-y-4">
                  <div className="flex w-full justify-between ">
                    <p className="text-[15px] font-[600]">{items.service}</p>
                    <div className="flex items-center gap-x-3">
                      <p className="text-[15px] font-[400]">{items.price}</p>
                      <h2 onClick={() => toBodyclip(index,items.price)} className="font-[800] cursor-pointer">{items.arrow}</h2>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="w-1/2 mt-5 space-y-3">
              {addservicesData.slice(9, 17).map((items) => (
                <div className="w-full space-y-4">
                  <div className="flex w-full justify-between ">
                    <p className="text-[15px] font-[600]">{items.service}</p>
                    <div className="flex items-center gap-x-3">
                      <p className="text-[15px] font-[400]">{items.price}</p>
                      <h2 onClick={() => toBodyclip(index)} className="font-[800]">{items.arrow}</h2>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServicesRecord;
