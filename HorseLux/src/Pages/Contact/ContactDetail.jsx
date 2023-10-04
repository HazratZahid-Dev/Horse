// import React, { useState } from "react";
// import { AiFillCaretRight } from "react-icons/ai";
// import Sidebar from "../../Compunents/Sidebar";
// import { addContactType, addDiognostic } from "../../config/Horses";
// import { Popover } from "@mui/material";
// import "../../Style/Scrollbar.css";
// import { milktestProprties, titleData } from "../../config/HorseDetail";
// import axios from "axios";
// import { baseUrl } from "../../config/BaseUrl";

// const token = localStorage.getItem("token");

// const ContactDetail = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [PrimaryPhone, setPrimaryPhone] = useState("");
//   const [FirstName, setFirstName] = useState("");
//   const [LastName, setLastName] = useState("");
//   const [Email, setEmail] = useState("");
//   console.log(token);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (
//         selectedBreed !== "" &&
//         PrimaryPhone !== "" &&
//         FirstName !== "" &&
//         LastName !== "" &&
//         Email !== "" &&
//         selectedProperty !== ""
//       ) {
//         const response = await axios.post(
//           `${baseUrl}/add-contact-data`,
//           {
//             contact_type: selectedBreed,
//             title: selectedProperty,
//             first_name: FirstName,
//             last_name: LastName,
//             primary_phone: PrimaryPhone,
//             email: Email,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         if (response.status === 200) {
//           alert("Contact Added Successfully...");
//           setSelectedBreed("");
//           setPrimaryPhone("");
//           setFirstName("");
//           setLastName("");
//           setEmail("");
//           setSelectedProperty("");
//         }
//       } else {
//         alert("All Fields are Mandatory!");
//       }
//     } catch (err) {
//       console.log("Error: ", err);
//     }
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;
//   const handleBreedSelect = (breed) => {
//     setSelectedBreed(breed);
//     setAnchorEl(null);
//   };
//   // Title

//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const handlePropertySelect = (property) => {
//     setSelectedProperty(property);
//     setAnchorETitle(null); // Close the popover when an item is selected
//   };

//   const [anchorETitle, setAnchorETitle] = React.useState(null);

//   const handleClickTitle = (event) => {
//     setAnchorETitle(event.currentTarget);
//     // setAnchorETitle(null);
//   };

//   const handleCloseTitle = () => {
//     setAnchorETitle(null);
//   };

//   const openTitle = Boolean(anchorETitle);
//   const idTitle = openTitle ? "simple-popover" : undefined;

//   // update the contact
//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (
//   //       selectedBreed !== "" &&
//   //       PrimaryPhone !== "" &&
//   //       FirstName !== "" &&
//   //       LastName !== "" &&
//   //       Email !== "" &&
//   //       selectedProperty !== ""
//   //     ) {
//   //       const response = await axios.put(
//   //         `${baseUrl}/update/${id}`, 
//   //           contact_type: selectedBreed,
//   //           title: selectedProperty,
//   //           first_name: FirstName,
//   //           last_name: LastName,
//   //           primary_phone: PrimaryPhone,
//   //           email: Email,
//   //         },
//   //         {
//   //           headers: {
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //         }
//   //       );
//   //       if (response.status === 200) {
//   //         alert("Contact Updated Successfully...");
//   //         setSelectedBreed("");
//   //         setPrimaryPhone("");
//   //         setFirstName("");
//   //         setLastName("");
//   //         setEmail("");
//   //         setSelectedProperty("");
//   //       }
//   //     } else {
//   //       alert("All Fields are Mandatory!");
//   //     }
//   //   } catch (err) {
//   //     console.log("Error: ", err);
//   //   }
//   // };
  

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full">
//         <h2 className="text-[30px] w-full  font-[700] px-12 mt-5">
//           Add Contact
//           <hr className="mt-2 px-12 " />
//         </h2>

//         <div className="px-10">
//           <div className="w-full">
//             <div className="w-full">
//               <form className="w-full">
//                 <div className="flex justify-between  ">
//                   <div className="w-[45%] pt-2">
//                     <label className="px-[16px]  text-[14px] font-[600] ">
//                       Contact Type{" "}
//                       <span className="text-red-500 text-xl">*</span>
//                     </label>
//                     <br />
//                     <div
//                       aria-describedby={id}
//                       variant="contained"
//                       onClick={handleClick}
//                       className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     >
//                       <input
//                         variant="contained"
//                         className="outline-none w-full h-full"
//                         type=" text"
//                         placeholder="Choose..."
//                         value={selectedBreed}
//                         onChange={(e) => setSelectedBreed(e.target.value)}
//                       ></input>
//                       <AiFillCaretRight className="text-2xl text-gray-500" />
//                     </div>
//                     <Popover
//                       id={id}
//                       open={open}
//                       anchorEl={anchorEl}
//                       onClose={handleClose}
//                       className="mt-2"
//                       anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "left",
//                       }}
//                     >
//                       <div className="bg-[#000032] breadScroll text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
//                         <h2 className="text-[18px] text-center py-1 font-[700]">
//                           Select Diagnostic Records
//                         </h2>
//                         <hr />
//                         {addContactType.map((item, index) => (
//                           <div
//                             className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
//                             key={index}
//                             onClick={() => handleBreedSelect(item.text)}
//                           >
//                             <input type="radio" />
//                             <p className="text-[16px] font-[700] font-[Quicksand]">
//                               {item.text}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </Popover>
//                   </div>
//                 </div>

//                 <h2 className="text-[30px] w-full  font-[700]  mt-5">
//                   Contact Information
//                   <hr className="mt-2 px-12 " />
//                 </h2>

//                 <div className="flex justify-between mt-2  ">
//                   <div className="w-[45%] pt-2">
//                     <label className="px-[17px]  text-[14px] font-[600] ">
//                       Title <span className="text-red-500 text-xl">*</span>
//                     </label>
//                     <br />
//                     <div
//                       onClick={handleClickTitle}
//                       className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                     >
//                       <input
//                         variant="contained"
//                         aria-describedby={idTitle}
//                         value={selectedProperty || ""}
//                         // value={title}
//                         // onChange={(e) => setTitle(e.target.value)}
//                         className="outline-none w-full h-full"
//                         type="text"
//                         placeholder="Select..."
//                         onClick={handleClickTitle}
//                       ></input>
//                       <AiFillCaretRight className="text-2xl text-gray-500" />
//                     </div>
//                     <Popover
//                       idTitle={idTitle}
//                       open={openTitle}
//                       anchorEl={anchorETitle}
//                       onClose={handleCloseTitle}
//                       anchorOrigin={{
//                         vertical: "bottom",
//                         horizontal: "left",
//                       }}
//                       // style={{ width: '' }}
//                       sx={{ width: "1000px" }}
//                     >
//                       <div className=" bg-[#000032] text-white h-auto p-2   w-96 ">
//                         {titleData.map((property, index) => (
//                           <div
//                             className="flex gap-x-2 px-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
//                             key={index}
//                             onClick={() =>
//                               handlePropertySelect(property.property)
//                             }
//                           >
//                             <input
//                               type="radio"
//                               checked={selectedProperty === property.property}
//                             />
//                             <p className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
//                               {property.property}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     </Popover>
//                   </div>

//                   <div className="w-[45%]">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Primary Phone
//                     </label>
//                     <br />
//                     <input
//                       type="text"
//                       placeholder="+44832938298921"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                       value={PrimaryPhone}
//                       onChange={(e) => setPrimaryPhone(e.target.value)}
//                     ></input>
//                   </div>
//                 </div>
//                 <div className="flex justify-between pt-2">
//                   <div className="w-[45%] pt-2">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       First Name
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="Adam"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                       value={FirstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     ></input>
//                   </div>
//                   <div className="w-[45%] ">
//                     <label className="px-[14px]   text-[16px] font-[600] ">
//                       Email
//                     </label>
//                     <br />
//                     <input
//                       type=" text"
//                       placeholder="adamsmith@gmail.com"
//                       className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//                       value={Email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     ></input>
//                   </div>
//                 </div>

//                 <div className="flex justify-between  pt-2">
//                   <div className="w-[45%] pt-2">
//                     <label className="px-[14px]  text-[14px] font-[600] ">
//                       Last Name <span className="text-red-500 text-xl">*</span>
//                     </label>
//                     <br />
//                     <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
//                       <input
//                         variant="contained"
//                         className="outline-none w-full h-full"
//                         type=" text"
//                         placeholder="Smith"
//                         value={LastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                       ></input>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-[#000032] w-[45%] mt-5 text-white px-8 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
//                   onClick={onSubmit}
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

// export default ContactDetail;

// {
//   /* <div className="w-full"> */
// }

// {
//   /* <div className="px-12 pt-8 ">
//             <h1 className="text-[30px] font-[700]">Add Contact</h1>
//             <hr />
//         </div> */
// }

// {
//   /* <div className="px-12 mt-3 w-[50%]">
//             <label htmlFor="" className="pl-4 font-[500] text-gray-500">Contact Type <span className="text-red-500 text-xl">*</span></label>
//             <input
//               type=" text"
//               placeholder="$Price"
//               className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
//             ></input>
//         </div> */
// }
// {
//   /* </div> */
// }


import React, { useState, useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Sidebar from "../../Compunents/Sidebar";
import { addContactType, addDiognostic } from "../../config/Horses";
import { Popover } from "@mui/material";
import "../../Style/Scrollbar.css";
import { milktestProprties, titleData } from "../../config/HorseDetail";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import { useParams ,useLocation } from "react-router-dom";

const token = localStorage.getItem("token");

const ContactDetail = () => {
  const { id } = useParams();
  const location =useLocation()
let cont_id= location?.state?.id
  const [update, setUpdate] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [PrimaryPhone, setPrimaryPhone] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    // Fetch contact details if update is not null
    if (update !== null) {
      fetchContactData();
    }
    if(cont_id){
      // const contData=await fetch("url/"+cont_id)
      // seetData(contData)

    }
  }, [update]);

  const fetchContactData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdata/${id}`);
      const contactData = response.data;
      setSelectedBreed(contactData.contact_type);
      setPrimaryPhone(contactData.primary_phone);
      setFirstName(contactData.first_name);
      setLastName(contactData.last_name);
      setEmail(contactData.email);
    } catch (error) {
      console.error("Error fetching contact data:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        selectedBreed !== "" &&
        PrimaryPhone !== "" &&
        FirstName !== "" &&
        LastName !== "" &&
        Email !== "" &&
        selectedProperty !== ""
      ) {
        if (update === null) {
          // Add new contact
          const response = await axios.post(
            `${baseUrl}/add-contact-data`,
            {
              contact_type: selectedBreed,
              title: selectedProperty,
              first_name: FirstName,
              last_name: LastName,
              primary_phone: PrimaryPhone,
              email: Email,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            alert("Contact Added Successfully...");
            setSelectedBreed("");
            setPrimaryPhone("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setSelectedProperty("");
          }
        } else {
          // Update existing contact
          const response = await axios.put(
            `${baseUrl}/update/${id}`,
            {
              contact_type: selectedBreed,
              title: selectedProperty,
              first_name: FirstName,
              last_name: LastName,
              primary_phone: PrimaryPhone,
              email: Email,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.status === 200) {
            alert("Contact Updated Successfully...");
          }
        }
      } else {
        alert("All Fields are Mandatory!");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const ids = open ? "simple-popover" : undefined;
  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
    setAnchorEl(null);
  };

  // Title
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setAnchorETitle(null); // Close the popover when an item is selected
  };

  const [anchorETitle, setAnchorETitle] = React.useState(null);

  const handleClickTitle = (event) => {
    setAnchorETitle(event.currentTarget);
  };

  const handleCloseTitle = () => {
    setAnchorETitle(null);
  };
console.log('update id::::::::::::::::',update);
  const openTitle = Boolean(anchorETitle);
  const idTitle = openTitle ? "simple-popover" : undefined;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full  font-[700] px-12 mt-5">
          {update === null ? "Add Contact" : "Update Contact"}
          <hr className="mt-2 px-12 " />
        </h2>

        <div className="px-10">
          <div className="w-full">
            <div className="w-full">
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] pt-2">
                    <label className="px-[16px]  text-[14px] font-[600] ">
                      Contact Type{" "}
                      <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div
                      aria-describedby={id}
                      variant="contained"
                      onClick={handleClick}
                      className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    >
                      <input
                        variant="contained"
                        className="outline-none w-full h-full"
                        type=" text"
                        placeholder="Choose..."
                        value={selectedBreed}
                        onChange={(e) => setSelectedBreed(e.target.value)}
                      ></input>
                      <AiFillCaretRight className="text-2xl text-gray-500" />
                    </div>
                    <Popover
                      id={ids}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      className="mt-2"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="bg-[#000032] breadScroll text-white w-[355px] h-72 overflow-y-auto py-2 px-5 font-[Quicksand]">
                        <h2 className="text-[18px] text-center py-1 font-[700]">
                          Select Diagnostic Records
                        </h2>
                        <hr />
                        {addContactType.map((item, index) => (
                          <div
                            className="flex gap-x-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                            key={index}
                            onClick={() => handleBreedSelect(item.text)}
                          >
                            <input type="radio" />
                            <p className="text-[16px] font-[700] font-[Quicksand]">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Popover>
                  </div>
                </div>

                <h2 className="text-[30px] w-full  font-[700]  mt-5">
                  Contact Information
                  <hr className="mt-2 px-12 " />
                </h2>

                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] pt-2">
                    <label className="px-[17px]  text-[14px] font-[600] ">
                      Title <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div
                      onClick={handleClickTitle}
                      className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    >
                      <input
                        variant="contained"
                        aria-describedby={idTitle}
                        value={selectedProperty || ""}
                        className="outline-none w-full h-full"
                        type="text"
                        placeholder="Select..."
                        onClick={handleClickTitle}
                      ></input>
                      <AiFillCaretRight className="text-2xl text-gray-500" />
                    </div>
                    <Popover
                      idTitle={idTitle}
                      open={openTitle}
                      anchorEl={anchorETitle}
                      onClose={handleCloseTitle}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      sx={{ width: "1000px" }}
                    >
                      <div className=" bg-[#000032] text-white h-auto p-2   w-96 ">
                        {titleData.map((property, index) => (
                          <div
                            className="flex gap-x-2 px-2 mt-1 hover:bg-slate-200 hover:text-yellow-600  rounded-md  py-1 cursor-pointer"
                            key={index}
                            onClick={() =>
                              handlePropertySelect(property.property)
                            }
                          >
                            <input
                              type="radio"
                              checked={selectedProperty === property.property}
                            />
                            <p className="text-[16px] hover:text-yellow-600 font-[700] font-[Quicksand]">
                              {property.property}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Popover>
                  </div>

                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Primary Phone
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="+44832938298921"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={PrimaryPhone}
                      onChange={(e) => setPrimaryPhone(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <div className="w-[45%] pt-2">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      First Name
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="Adam"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={FirstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </div>
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Email
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="adamsmith@gmail.com"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="flex justify-between  pt-2">
                  <div className="w-[45%] pt-2">
                    <label className="px-[14px]  text-[14px] font-[600] ">
                      Last Name <span className="text-red-500 text-xl">*</span>
                    </label>
                    <br />
                    <div className="py-1 flex items-center justify-between w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]">
                      <input
                        variant="contained"
                        className="outline-none w-full h-full"
                        type=" text"
                        placeholder="Smith"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#000032] w-[45%] mt-5 text-white px-8 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                  onClick={onSubmit}
                >
                  {!cont_id ? "Save" : "Update"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
