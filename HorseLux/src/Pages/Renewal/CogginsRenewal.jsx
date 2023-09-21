import React from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import h1 from '../../Images/h1.png'
import data from "../../config/Data";
import Sidebar from "../../Compunents/Sidebar";

const CogginsReneval = () => {
    const navigate=useNavigate()
 
    const location = useLocation();
    const headingText = getHeadingText(location.pathname);
    function getHeadingText(pathname) {
        switch (pathname) {
          case "/dashboard/selecthorse":
            return "ADD COGGINS";
          case "/dashboard/adddental":
            return "ADD DENTAL";
          // Add more cases for other locations as needed
          default:
            return "Default Heading";
        }
      }
      const navigateToDifferentPath = () => {
      
            navigate('/dashboard/cogginsre');
        
    };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5">
        <div >
         <h2 className="text-[30px] font-[700] uppercase text-center">
         {/* {headingText} */}
         add coggins renewal
         </h2>
        </div>
        <div className="w-1/2">
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
          <hr className="mt-6"/>
          <div className="flex items-center  mt-5 justify-between">
            <h3 className="text-[20px] font-[700] ">Select Horse</h3>
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
          {data.map((items) => (
              <>
              <div className="flex items-center gap-x-3">
                <img
                  src={items.img}
                  className="w-[65px] h-[65px] rounded-full"
                />
                <div className="w-full flex justify-between">
                 <div>
                 <p className="text-[15px] font-[600]">{items.name}</p>
                  <p className="text-[10px] font-[600] ">
              
                    <span>Owner</span>
                    {items.onwer}
                   
                  </p>
                 </div>
                  <input type="radio"/>
                </div>
            

              </div>
              <hr/>
              </>
            ))}
        

           <div>
       
           </div>
          
          </div>
          <button onClick={navigateToDifferentPath} className="bg-[#000032] mt-5 text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]">Next</button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default CogginsReneval;
