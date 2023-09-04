// import React from "react";
// import Sidebar from "../../../Compunents/Sidebar";
// import {
//   AiFillCaretRight,
//   AiOutlineCaretRight,
//   AiOutlinePlus,
// } from "react-icons/ai";

// const UploadContact = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full px-10">
//         <h2 className="text-[30px] text-center leading-[45px] font-[700]">
//           add contact upload
//         </h2>
//         <form>
//           <label className="px-3 font-[600] text-[16px] leading-[24px]">
//             Contact
//           </label>
//           <div className="py-1 w-[380px] flex items-center justify-between  border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
//             <input
//               className="outline-none w-full h-full"
//               type=" text"
//               placeholder="Select..."
//             ></input>
//             <AiFillCaretRight className="text-2xl text-gray-300" />
//           </div>
//           <h2 className="text-[24px] mt-3 font-[700] leading-[36px]">
//             Document Type
//           </h2>
//           <hr className="mt-3" />
//           <div className=" py-3 w-[380px] relative ">
//             <div className="flex gap-x-5">
//               <div className="flex items-center gap-x-2 justify-center">
//                 <input type="radio" name="release" id="release1" />
//                 <label
//                   htmlFor="release1"
//                   className="text-[16px] font-[600] leading-[24px]"
//                 >
//                   Liability Release{" "}
//                 </label>
//               </div>
//               <div className="flex items-center gap-x-2 justify-center">
//                 <input type="radio" name="release" id="release2" />
//                 <label
//                   htmlFor="release2"
//                   className="text-[16px] font-[600] leading-[24px]"
//                 >
//                   Other Document
//                 </label>
//               </div>
//             </div>

//             <div className="w-full absolute top-56">
//             <label
//               htmlFor="release1"
//               className="text-[16px] py-2  font-[600] leading-[24px]"
//             >
//               Liability Release
//             </label>
//             <button className="w-[162px] flex mt-2 items-center rounded-[5px] border justify-around text-[12px] font-[600] leading-[18px] h-[33px]">
//               <AiOutlinePlus className="text-lg" />
//               Add Liability Release
//             </button>
//             <button
//               type="submit"
//               className="bg-[#000032] w-full mt-3 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
//             >
//               Save
//             </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadContact;
import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import {
  AiFillCaretRight,
  AiOutlineCaretRight,
  AiOutlinePlus,
} from "react-icons/ai";

const UploadContact = () => {
  // Use state to track whether "Other Document" is selected
  const [isOtherDocumentSelected, setIsOtherDocumentSelected] = useState(false);

  // Function to handle radio button change
  const handleRadioButtonChange = (event) => {
    setIsOtherDocumentSelected(event.target.id === "release2");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-10">
        <h2 className="text-[30px] text-center leading-[45px] font-[700]">
          add contact upload
        </h2>
        <form>
          <label className="px-3 font-[600] text-[16px] leading-[24px]">
            Contact
          </label>
          <div className="py-1 w-[380px] flex items-center justify-between  border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
            <input
              className="outline-none w-full h-full"
              type=" text"
              placeholder="Select..."
            ></input>
            <AiFillCaretRight className="text-2xl text-gray-300" />
          </div>
          <h2 className="text-[24px] mt-3 font-[700] leading-[36px]">
            Document Type
          </h2>
          <hr className="mt-3" />
          <div className=" py-3 w-[380px] relative ">
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-2 justify-center">
                <input
                  type="radio"
                  name="release"
                  id="release1"
                  onChange={handleRadioButtonChange}
                />
                <label
                  htmlFor="release1"
                  className="text-[16px] font-[600] leading-[24px]"
                >
                  Liability Release{" "}
                </label>
              </div>
              <div className="flex items-center gap-x-2 justify-center">
                <input
                  type="radio"
                  name="release"
                  id="release2"
                  onChange={handleRadioButtonChange}
                />
                <label
                  htmlFor="release2"
                  className="text-[16px] font-[600] leading-[24px]"
                >
                  Other Document
                </label>
              </div>
            </div>

            {/* Conditionally render input field and text area */}
            {isOtherDocumentSelected && (
              <div className="space-y-3 py-3">
                <div className="w-full">
                <label
                  htmlFor="otherDocumentInput"
                  className="text-[16px] px-4 font-[600] leading-[24px] "
                >
                  Title
                </label>
                <input
                  type="text"
                  id="otherDocumentInput"
                  className="w-[380px] border py-3 px-4 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                  placeholder="Title"
                />
                </div>
                <div className="w-full">
                <label
                  htmlFor="otherDocumentTextarea"
                  className="text-[16px] p  px-4 font-[600] leading-[24px] "
                >
                  Description
                </label>
                <textarea
                  id="otherDocumentTextarea"
                  className="w-[380px] px-4 py-1 h-[120px] border  shadow-md  outline-none rounded-[10px]"
                  placeholder="Description"
                ></textarea>
                </div>
              </div>
            )}

            <div className="w-full absolute top-72 ">
              <label
                htmlFor="release1"
                className="text-[16px] py-2  font-[600] leading-[24px]"
              >
                Liability Release
              </label>
              <button className="w-[162px] flex mt-2 items-center rounded-[5px] border justify-around text-[12px] font-[600] leading-[18px] h-[33px]">
                <AiOutlinePlus className="text-lg" />
                Add Liability Release
              </button>
              <button
                type="submit"
                className="bg-[#000032] w-full mt-3 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadContact;

