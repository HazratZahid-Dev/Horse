// import React, { useState } from "react";
// import Sidebar from "../../../Compunents/Sidebar";
// import h1 from "../../../Images/h1.png";
// import Popover from "@mui/material/Popover";

// import { AiFillCaretDown, AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
// import { useNavigate, useParams } from "react-router-dom";
// import { contactType } from "../../../config/Horses";
// import { milktestProprties } from "../../../config/HorseDetail";

// const AddFool = () => {
 

//   const navigate = useNavigate();


//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const handlePropertySelect = (property) => {
//     setSelectedProperty(property);
//     setAnchorEl(null); // Close the popover when an item is selected
//   };

 
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

  
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full">
//         <h2 className="text-[30px] w-full py-3 font-[700] text-center">
//        ADD FOOLING 
//         </h2>

//         <div className="px-10">
//           <div className="w-full">
//           <div className="w-[45%] ">
                   
//           <div className="w-full">
//             <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

//             <div className="w-[39px] h-[39px] rounded-full mt-2 ">
//               <img
//                 className="h-full w-full rounded-full object-fill"
//                 src={h1}
//               />
//               <p className="text-[10px] font-[600] text-center mt-1">Ferrier</p>
//             </div>
//           </div>
                   
                   
//                   </div>
           
//             <hr className="mt-6 w-1/2" />
//             <div className="w-full">
//               <h2 className="w-full text-[20px] font-[700] py-2 ">
//                 Add detail
//               </h2>
//               <form className="w-full">
//                 <div className="flex justify-between  ">
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]  text-[16px] font-[600] ">
//                       Date <span className="text-red-500 text-xl">*</span>
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="22-jun-2023" 
//                       className="py-1 w-full border px-3 shadow-xl mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
                    
//                   </div>
//                   <div className="w-[45%]">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                     Milk Test Properties <span className="text-red-500 text-xl">*</span>
//                     </label>
//                     <br />
//               <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
//                 <input
//                   aria-describedby={id}
//                   variant="contained"
//                   onClick={handleClick}
//                   className="outline-none w-full h-full"
//                   type=" text"
//                   value={selectedProperty || ""}
//                   placeholder="Select"
//                 ></input>
//                 <AiFillCaretDown className="text-2xl text-gray-500" />
//               </div>

//               <Popover
//                 id={id}
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 // style={{ width: '' }}
//                 sx={{ width: "1000px" }}
//               >
//                 <div className=" bg-[#000032] text-white h-auto p-2   w-96 ">
//                   {milktestProprties.map((property, index) => (
//                     <div
//                       className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
//                       key={index}
//                       onClick={() => handlePropertySelect(property.property)}
//                     >
//                       <input type="radio" checked={selectedProperty === property.property}  />
//                       <p className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
//                         {property.property}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </Popover>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2">
//                   <div className="w-[45%]">
                    
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                     Account
//                     </label>
//                     <br />
              
//               <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
//                 <input
//                   aria-describedby={id}
//                   variant="contained"
//                   onClick={handleClick}
//                   className="outline-none w-full h-full"
//                   type=" text"
//                   value={selectedProperty || ""}
//                   placeholder="Select Contact..."
//                 ></input>
//                 <AiFillCaretDown className="text-2xl text-gray-500" />
//               </div>
//                 </div>

//                   <div className="w-[45%]">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Milk Test Ph
//                     </label>
//                     <br />
//                     <input
//                      type="text"
              
//                       placeholder="adamsmith@gmail.com"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-2  ">
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Price
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="Smith"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
//                   </div>
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Under Development
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="Under Development"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                 <div className=" justify-between   w-[45%] mt-2   ">
//                   <label className="px-1  py-3 text-[16px] font-[600]  ">
//                     Add Attachments
//                   </label>
//                   <div className="flex items-center mt-1 ">
//                     <label
//                       htmlFor="fileInput"
//                       className="custom-file-upload border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
//                     >
//                       <AiOutlinePlus />
//                       Add Attachments
//                     </label>
//                     <input
//                       type="file"
//                       id="fileInput"
//                       style={{ display: "none" }}
//                     //   onChange={handleFileChange}
//                     />
//                     {selectedFile && (
//                       <button className=" text-[12px] font-[600] ml-2">
//                         {" "}
//                         {selectedFile.name}
//                       </button>
//                     )}
//                   </div>
//                 </div>

//                 <div className=" justify-between mt-1   w-[45%]  ">
//                 <label className="px-[14px]   text-[16px] font-[600] ">
//                       Comments
//                     </label>
//                     <textarea className="py-1 w-full border px-3 shadow-md mt-1 h-20 outline-none rounded-[10px] "></textarea>
//                 </div>
//                 </div>
//                 <button
//                   type="submit"
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

// export default AddFool;



import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import h1 from "../../../Images/h1.png";
import { AiFillCaretDown, AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { contactType } from "../../../config/Horses";
import { milktestProprties } from "../../../config/HorseDetail";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const AddFoal = () => {
 

  const navigate = useNavigate();


  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setAnchorEl(null); // Close the popover when an item is selected
  };

 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
       ADD FOOLING 
        </h2>

        <div className="px-10">
          <div className="w-full">
          <div className="w-[45%] ">
                   
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
                   
                   
                  </div>
           
            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add detail
              </h2>
             <div className="flex">
              {/* left side Form */}

             <form className="w-1/2">
                <div className="flex justify-between  ">
                  <div className="w-[80%] ">
                    <label className="px-[14px] text-gray-500 text-[16px] font-[500] ">
                      Date <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="22-jun-2023" 
                      className="py-1 w-full border px-3 shadow-xl mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                    
                  </div>
                 
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-[80%]">
                    
                    <label className="px-[14px]  text-gray-500 text-[16px] font-[500] ">
                    Account
                    </label>
                    <br />
              
              <div className="py-1 flex items-center justify-between w-full border px-3 shadow-xl mt-1 outline-none h-12 rounded-[10px]">
                <input
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className="outline-none w-full h-full"
                  type=" text"
                  value={selectedProperty || ""}
                  placeholder="Select Contact..."
                ></input>
                <AiFillCaretRight className="text-2xl text-gray-500" />
              </div>
                </div>

                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[80%] ">
                    <label className="px-[14px] text-gray-500  text-[16px] font-[500] ">
                      Price
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="$Price"
                      className="py-1 w-full border px-3 shadow-xl mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
              
                </div>
                
                <div className=" justify-between mt-1   w-[80%]  ">
                <label className="px-[14px] text-gray-500  text-[16px] font-[500] ">
                      Comments
                    </label>
                    <input
                      type=" text"
                      placeholder="Add Comments..."
                      className="py-1 w-full border px-3 shadow-xl mt-1 outline-none h-12 rounded-[10px]"
                    ></input>               
                     </div>

                <div className="flex items-center justify-between">
                <div className=" justify-between   w-[45%] mt-2   ">
                  <label className="px-1  py-3 text-[16px] font-[600]  ">
                    Add Attachments
                  </label>
                  <div className="flex items-center mt-1 ">
                    <label
                      htmlFor="fileInput"
                      className="custom-file-upload border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
                    >
                      <AiOutlinePlus />
                      Add Attachments
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    //   onChange={handleFileChange}
                    />
                    {selectedFile && (
                      <button className=" text-[12px] font-[600] ml-2">
                        {" "}
                        {selectedFile.name}
                      </button>
                    )}
                  </div>
                </div>

                </div>
                <button
                  type="submit"
                  className="bg-[#000032] w-[80%] mt-5 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                >
                  Save
                </button>
              </form>

              {/* right side form */}
              
              <form className="border border-black rounded-md w-1/3 pl-2 ml-12 mb-6">

              <div className=" justify-between mt-2   w-[80%] ml-2">
                <label className="text-[16px] font-[600] ">
                      Foal Details:
                    </label>
                   <div>
                   <h1 className="font-semibold">Name</h1>
                    <input
                      type=" text"
                      placeholder="Full name" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>
                   </div>
              </div>

              <div className=" justify-between mt-3   w-[80%] ml-2">
                   <h1 className="font-semibold">sex</h1>
                   <div className="flex">
                    <input
                      type=" text"
                      placeholder="select..." 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>

                    <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                {/* <Button variant="contained" {...bindTrigger(popupState)}>
                  Open Popover
                </Button> */}
                <AiFillCaretDown 
                {...bindTrigger(popupState)}
                className="text-xl text-gray-500 pb-2" />
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  PaperProps={{
                    style: { width: '372px', 
                    marginLeft: '-180px',
                    maxHeight: '300px'
                    
                  } // Adjust the width as needed
                    
                  }}
                >
                  <Typography sx={{ p: 2 }} className="text-white text-center bg-[#000032]">
                  Select sex</Typography>

                  <hr />

                  <Typography className="bg-[#000032] text-white" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Colt
                  </Typography>

                  <Typography className="bg-[#000032] text-white mt-3" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Filly</Typography>

                    </Popover>
                  </div>
                )}
              </PopupState>
                    {/* <AiFillCaretDown className="text-xl text-gray-500 pb-2"/> */}
                    </div>
              </div>



              <div className=" justify-between mt-3  w-[80%] ml-2">
                   <h1 className="font-semibold">color</h1>
                <div className="flex">
                    <input
                      type=" text"
                      placeholder="select" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>

          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                {/* <Button variant="contained" {...bindTrigger(popupState)}>
                  Open Popover
                </Button> */}
                <AiFillCaretDown 
                {...bindTrigger(popupState)}
                className="text-xl text-gray-500 pb-2" />
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  PaperProps={{
                    style: { width: '372px', 
                    marginLeft: '-180px',
                    maxHeight: '300px'
                    
                  } // Adjust the width as needed
                    
                  }}
                >
                  <Typography sx={{ p: 2 }} className="text-white text-center bg-[#000032]">
                  Select Horse Color</Typography>

                  <hr />

                  <Typography className="bg-[#000032] text-white" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Appalosa
                  </Typography>

                  <Typography className="bg-[#000032] text-white mt-3" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Bay</Typography>

                 <Typography className="bg-[#000032] text-white mt-1" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Bay Roan</Typography>

                 <Typography className="bg-[#000032] text-white mt-1" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Black</Typography>

                 <Typography className="bg-[#000032] text-white mt-1" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Blue Roan</Typography>

                 <Typography className="bg-[#000032] text-white mt-1" sx={{ p: 2 }}><label>
                   <input type="radio" name="color" value="red" />
                 </label>Brown</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
                    {/* <AiFillCaretDown className="text-xl text-gray-500 pb-2" /> */}
                    </div>
              </div>

              <div className=" justify-between mt-3  w-[80%] ml-2">
                   <h1 className="font-semibold">Marking</h1>
                    <input
                      type=" text"
                      placeholder="foal marking" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>
              </div>

              <div className=" justify-between mt-3  w-[80%] ml-2">
                   <h1 className="font-semibold">Length to stand</h1>
                    <input
                      type=" text"
                      placeholder="foal length to stand" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5 border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>
              </div>

              <div className=" justify-between mt-3  w-[80%] ml-2">
                   <h1 className="font-semibold">Length to feed</h1>
                    <input
                      type=" text"
                      placeholder="Foal lenth to feed" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5  border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>
              </div>

              <div className=" justify-between mt-3 mb-5  w-[80%] ml-2">
                   <h1 className="font-semibold">IGG Titter</h1>
                    <input
                      type=" text"
                      placeholder="Foal igg titter" 
                      // className="py-1 w-full border px-3 shadow mt-1 outline-none h-12 rounded-[10px]"
                      className="w-full h-5 border-b border-gray-300 rounded-none resize-none  focus:outline-none "
                      label="Name">
                    </input>
              </div>

              </form>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoal;
