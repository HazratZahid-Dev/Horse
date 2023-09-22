// import React, { useState } from "react";
// import Sidebar from "../Compunents/Sidebar";
// import { BiHide, BiShow } from "react-icons/bi";

// const Profile = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const [showNew, setShowNew] = useState(false);

//   const handleToggleNewPassword = () => {
//     setShowNew((prevShowPassword) => !prevShowPassword);
//   };
//   const [showConfirm, setShowConfirm] = useState(false);

//   const ConfirmPassword = () => {
//     setShowConfirm((prevShowPassword) => !prevShowPassword);
//   };
//   return (
//     <div className="flex ">
//       <Sidebar />
//       <div className="p-12 w-full">
//         <div className="w-full">
//           <h2 className="text-[30px] font-[700]">Edit Profile</h2>
//           <hr />
//           <div>
//             <form className="py-6 space-y-3">
//               <div className="w-full flex justify-between items-center">
//                 <div className="w-[45%]">
//                   <label className="text-[16px]  px-4 font-[600]">
//                     Name <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     className="h-[48px] mt-1 w-full bg-[#EBEEF2] rounded-full px-4 outline-none"
//                     placeholder="Adam Smith "
//                   ></input>
//                 </div>
//                 <div className="w-[45%]">
//                   <label className="text-[16px] py-2  px-4 font-[600]">
//                     Current Password{" "}
//                     <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
//                     <input
//                       name="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="password"
//                       className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
//                     />

//                     <button
//                       type="button"
//                       className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
//                       onClick={handleTogglePassword}
//                     >
//                       {showPassword ? (
//                         <BiHide size={20} />
//                       ) : (
//                         <BiShow size={20} />
//                       )}
//                     </button>
//                   </div>{" "}
//                 </div>
//               </div>
//               <div className="w-full flex justify-between items-center">
//                 <div className="w-[45%]">
//                   <label className="text-[16px]  px-4 font-[600]">
//                     Email <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     className="h-[48px] mt-1 w-full bg-[#EBEEF2] rounded-full px-4 outline-none"
//                     placeholder="adamsmith@gmail.com "
//                   ></input>
//                 </div>
//                 <div className="w-[45%]">
//                   <label className="text-[16px] py-2  px-4 font-[600]">
//                     New Password{" "}
//                     <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
//                     <input
//                       name="newpassword"
//                       type={showNew ? "text" : "password"}
//                       placeholder="********"
//                       className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
//                     />

//                     <button
//                       type="button"
//                       className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
//                       onClick={handleToggleNewPassword}
//                     >
//                       {showNew ? (
//                         <BiHide size={20} />
//                       ) : (
//                         <BiShow size={20} />
//                       )}
//                     </button>
//                   </div>{" "}
//                 </div>
//               </div>
//               <div className="w-full flex justify-between items-center">
//                 <div className="w-[45%]">
//                   <label className="text-[16px]  px-4 font-[600]">
//                     Phone <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     className="h-[48px] mt-1 w-full bg-[#EBEEF2] rounded-full px-4 outline-none"
//                     placeholder="Adam Smith "
//                   ></input>
//                 </div>
//                 <div className="w-[45%]">
//                   <label className="text-[16px] py-2  px-4 font-[600]">
//                     Confirm Password{" "}
//                     <span className="text-red-500 text-xl">*</span>
//                   </label>
//                   <br />
//                   <div className="relative w-full rounded-2xl bg-[#EBEEF2]">
//                     <input
//                       name="password"
//                       type={showConfirm ? "text" : "password"}
//                       placeholder="********"
//                       className=" py-2 rounded-2xl outline-none px-4 bg-[#EBEEF2] w-[70%]"
//                     />

//                     <button
//                       type="button"
//                       className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
//                       onClick={ConfirmPassword}
//                     >
//                       {showConfirm ? (
//                         <BiHide size={20} />
//                       ) : (
//                         <BiShow size={20} />
//                       )}
//                     </button>
//                   </div>{" "}
//                 </div>
//               </div>
//               <div className="w-full flex justify-between items-center">
//                 <div className="w-[45%] mt-12">
//                  <button type="submit" className="h-[53px] w-full rounded-full bg-[#000032] text-[18px] font-[600] text-white">Save Change</button>
//                 </div>
                
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import { BiHide, BiShow } from "react-icons/bi";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleNewPassword = () => {
    setShowNew((prevShowPassword) => !prevShowPassword);
  };

  const ConfirmPassword = () => {
    setShowConfirm((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="p-12 w-full">
        <div className="w-full">
          <h2 className="text-[30px] font-[700]">Edit Profile</h2>
          <hr />
          <div>
            <Formik
              initialValues={{
                name: "",
                currentPassword: "",
                email: "",
                newPassword: "",
                phone: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values);
              }}
            >
              {() => (
                <Form className="py-6 space-y-3">
                  <div className="w-full flex justify-between items-center">
                    <div className="w-[45%]">
                      <label className="text-[16px]  px-4 font-[600]">
                        Name <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="name"
                        className="h-[48px] mt-1 w-full bg-[#E4E4E4] rounded-full px-4 outline-none"
                        placeholder="Adam Smith"
                      />
                    </div>
                    <div className="w-[45%]">
                      <label className="text-[16px] py-2  px-4 font-[600]">
                        Current Password{" "}
                        <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <div className="relative w-full bg-[#E4E4E4] rounded-2xl   ">
                        <Field
                          name="currentPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          className="py-2 rounded-2xl outline-none  bg-[#E4E4E4] px-4 w-[70%]"
                        />
                        <button
                          type="button"
                          className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <BiHide size={20} />
                          ) : (
                            <BiShow size={20} />
                          )}
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="w-[45%]">
                      <label className="text-[16px]  px-4 font-[600]">
                        Email <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="email"
                        className="h-[48px] mt-1 w-full bg-[#E4E4E4] rounded-full px-4 outline-none"
                        placeholder="adamsmith@gmail.com"
                      />
                    </div>
                    <div className="w-[45%]">
                      <label className="text-[16px] py-2  px-4 font-[600]">
                        New Password{" "}
                        <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <div className="relative w-full rounded-2xl bg-[#E4E4E4]">
                        <Field
                          name="newPassword"
                          type={showNew ? "text" : "password"}
                          placeholder="********"
                          className="py-2 rounded-2xl outline-none px-4 bg-[#E4E4E4] w-[70%]"
                        />
                        <button
                          type="button"
                          className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
                          onClick={handleToggleNewPassword}
                        >
                          {showNew ? (
                            <BiHide size={20} />
                          ) : (
                            <BiShow size={20} />
                          )}
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="w-[45%]">
                      <label className="text-[16px]  px-4 font-[600]">
                        Phone <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="phone"
                        className="h-[48px] mt-1 w-full bg-[#E4E4E4] rounded-full px-4 outline-none"
                        placeholder="Adam Smith"
                      />
                    </div>
                    <div className="w-[45%]">
                      <label className="text-[16px] py-2  px-4 font-[600]">
                        Confirm Password{" "}
                        <span className="text-red-500 text-xl">*</span>
                      </label>
                      <br />
                      <div className="relative w-full rounded-2xl bg-[#E4E4E4]">
                        <Field
                          name="confirmPassword"
                          type={showConfirm ? "text" : "password"}
                          placeholder="********"
                          className="py-2 rounded-2xl outline-none px-4 bg-[#E4E4E4] w-[70%]"
                        />
                        <button
                          type="button"
                          className="absolute outline-none right-2 top-1/2 transform -translate-y-1/2"
                          onClick={ConfirmPassword}
                        >
                          {showConfirm ? (
                            <BiHide size={20} />
                          ) : (
                            <BiShow size={20} />
                          )}
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="w-[45%] mt-12">
                      <button
                        type="submit"
                        className="h-[53px] w-full rounded-full bg-[#000032] text-[18px] font-[600] text-white"
                      >
                        Save Change
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

