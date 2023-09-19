import React from "react";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../../Compunents/Sidebar";
import data from "../../../config/Data";
// import data from "../../config/Data";
// import Sidebar from "../../Compunents/Sidebar";

const Feed = () => {
    const navigate=useNavigate()
 
  
      const navigateToDifferentPath = () => {
        navigate('/report/feedharry')
    };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5">
        <div >
         <h2 className="text-[30px] font-[700] ">
         FEED
         </h2>
        </div>
        <hr className=""/>

        <div className="w-1/2">
        
       
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
                  <button>{items.arrow}</button>
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

export default Feed;
