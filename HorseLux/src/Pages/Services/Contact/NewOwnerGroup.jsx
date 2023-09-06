// import React, { useState } from "react";
// import Sidebar from "../../../Compunents/Sidebar";
// import h1 from "../../../Images/h1.png";
// import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
// import { useNavigate, useParams } from "react-router-dom";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import { contactType } from "../../../config/Horses";

// const NewOwner = () => {
//   // const { index } = useParams();

//   const handleAddGroupMember = (e) => {
//     e.preventDefault(); 

//   };

//   const navigate = useNavigate();
//   const toHome = () => {
//     navigate("/dashboard");
//   };

//   const [selectedFile, setSelectedFile] = useState(null);

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full">
//         <h2 className="text-[30px] w-full py-3 font-[700] text-center">
//          NEW OWNER GROUP
//         </h2>
//         <div className="px-10">
//             <h2 className="text-[24px] leading-[36px] font-[700]">
//             GROUP INFO AND MEMBERS
//             </h2>
//             <hr/>
//         </div>

//         <div className="px-10 mt-5">
//           <div className="w-full">
           

//             <div className="w-full">
              
//               <form className="w-full">
//                 <div className="flex justify-between  ">
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]  text-[16px] font-[600] ">
//                      Group Name
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="Name"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
//                   </div>
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                    Usef Number
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       placeholder="Usef Number"
//                       className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2  ">
//                   <div className="w-[45%] border shadow-md mt-4 px-2 py-3 rounded-[10px]">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Owner
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       //   onChange={handleQuantityChange}
//                       //   value={quantity}
//                       placeholder="Select"
//                       className="py-1 w-full  px-3  mt-1 outline-none h-9 rounded-[10px]"
//                     ></input>
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Percentage
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       //   onChange={handleQuantityChange}
//                       //   value={quantity}
//                       placeholder="0%"
//                       className="py-1 w-full  px-3  mt-1 outline-none h-9 rounded-[10px]"
//                     ></input>
//                   </div>
//                   <div className="w-[45%]">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Comments
//                     </label>
//                     <br />
//                     <textarea
//                       type="text"
                    
//                       placeholder="Comments"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-20 rounded-[10px]"
//                     ></textarea>
//                   </div>
//                 </div>
                

//                 <div className=" justify-between   w-[45%] mt-2   ">
                 
//                   <div className="flex items-center mt-1 ">
//                     <button
//                       htmlFor="fileInput" 
//                       onClick={handleAddGroupMember}
//                       className="mt-3 border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
//                     >
//                       <AiOutlinePlus />
//                       Add Group Member
//                     </button>
                   
                  
//                   </div>
//                 </div>
//                 <h2 className="text-[18px] font-[700] mt-4 leading-[27px]">GROUP INFO AND MEMBERS</h2>

//                 <button
//                   type="submit"
//                   onClick={toHome}
//                   className="bg-[#000032] w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
//                 >
//                   Save
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewOwner;

import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { contactType } from "../../../config/Horses";

const NewOwner = () => {
  // const { index } = useParams();
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/dashboard");
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [groupMembers, setGroupMembers] = useState([{ owner: "", percentage: "" }]);

  const handleAddGroupMember = (e) => {
    e.preventDefault(); 
    setGroupMembers([...groupMembers, { owner: "", percentage: "" }]);
  };

  const handleOwnerChange = (index, value) => {
    const updatedMembers = [...groupMembers];
    updatedMembers[index].owner = value;
    setGroupMembers(updatedMembers);
  };

  const handlePercentageChange = (index, value) => {
    const updatedMembers = [...groupMembers];
    updatedMembers[index].percentage = value;
    setGroupMembers(updatedMembers);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">NEW OWNER GROUP</h2>
        <div className="px-10">
          <h2 className="text-[24px] leading-[36px] font-[700]">GROUP INFO AND MEMBERS</h2>
          <hr />
        </div>

        <div className="px-10 mt-5">
          <div className="w-full">
            <form className="w-full">
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label className="px-[14px] text-[16px] font-[600]">Group Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                  ></input>
                </div>
                <div className="w-[45%]">
                  <label className="px-[14px] text-[16px] font-[600]">Usef Number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Usef Number"
                    className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
                  ></input>
                </div>
              </div>
              <div  className="flex justify-between mt-2">
             <div className="flex flex-col w-[45%]">
             {groupMembers.map((member, index) => (
            
            <div key={index} className="w-full border  shadow-md mt-4 px-2 py-3 rounded-[10px]">
              <label className="px-[14px] text-[16px] font-[600]">Owner</label>
              <br />
              <input
                type="text"
                placeholder="Select"
                className="py-1 w-full px-3 mt-1 outline-none h-9 rounded-[10px]"
                value={member.owner}
                onChange={(e) => handleOwnerChange(index, e.target.value)}
              ></input>
              <label className="px-[14px] text-[16px] font-[600]">Percentage</label>
              <br />
              <input
                type="text"
                placeholder="0%"
                className="py-1 w-full px-3 mt-1 outline-none h-9 rounded-[10px]"
                value={member.percentage}
                onChange={(e) => handlePercentageChange(index, e.target.value)}
              ></input>
            </div>
          
       
        ))}
             </div>

              <div className="w-[45%]">
                    <label className="px-[14px] text-[16px] font-[600]">Comments</label>
                    <br />
                    <textarea
                      type="text"
                      placeholder="Comments"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-20 rounded-[10px]"
                    ></textarea>
                  </div>

                  </div>


              <div className="justify-between w-[45%] mt-2">
                <div className="flex items-center mt-1">
                  <button
                    htmlFor="fileInput"
                    onClick={handleAddGroupMember}
                    className="mt-3 border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
                  >
                    <AiOutlinePlus />
                    Add Group Member
                  </button>
                </div>
              </div>
              <h2 className="text-[18px] font-[700] mt-4 leading-[27px]">GROUP INFO AND MEMBERS</h2>

              <button
                type="submit"
                onClick={toHome}
                className="bg-[#000032] w-1/2 mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOwner;

