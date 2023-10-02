import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  Formik,
  Field,
  FieldArray,
  ErrorMessage,
  useFormikContext,
  Form,
} from "formik";
import { baseUrl } from "../../config/BaseUrl";
import axios from "axios";
import { useSelector } from "react-redux";
let token = localStorage.getItem("token");

const NewOwner = () => {
  const User = useSelector((state) => state.auth);
  // const userId = User._id;
  const navigate = useNavigate();

  const groupinfomember = () => {
    navigate("/groupinfomember");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [groupMembers, setGroupMembers] = useState([
    { owner: "", percentage: "" },
  ]);

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
        <div className="px-10 pt-5">
          <h2 className="text-[24px] leading-[36px] font-[700]">
            NEW OWNER GROUP
          </h2>
          <hr />
        </div>

        <div className="px-10 mt-5">
          <div className="w-full">
            <Formik
              initialValues={{
                _id:uuidv4(),
                name: "",
                number: "",
                // userId:userId,
                shares: [{ owner: "", percentage: "" }],
                comments: "",
              }}
              onSubmit={(values) => {
                const transformedShares = {};
                values.shares.forEach((share) => {
                  transformedShares[share.owner] = share.percentage;
                });
                const modifiedValues = { ...values, shares: transformedShares };

                axios
                  .post(`${baseUrl}/groups`,modifiedValues,{headers:{Authorization:`Bearer ${token}`}})
                  .then((response) => {
                    console.log("Response from server:", response.data);
                    alert("Contact Added Successfully...");
                    // navigate("/groupinfomember");
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
                console.log(values);
              }}
            >
              {({ values, handleSubmit, handleAddGroupMember }) => (
                <Form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex justify-between">
                    <div className="w-[45%]">
                      <label className="px-[14px] text-[16px] font-[600]">
                        Group Name
                      </label>
                      <br />
                      <Field
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      ></Field>
                    </div>
                    <div className="w-[45%]">
                      <label className="px-[14px] text-[16px] font-[600]">
                        Usef Number
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="number"
                        placeholder="Usef Number"
                        className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
                      ></Field>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col w-[45%]">
                      {/* {groupMembers.map((member, index) => (
            
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
          
       
        ))} */}
                      <FieldArray name="shares">
                        {(arrayHelpers) => (
                          <div>
                            {values.shares.map((member, index) => (
                              <div
                                key={index}
                                className="w-full border  shadow-md mt-4 px-2 py-3 rounded-[10px]"
                              >
                                <label className="px-[14px] text-[16px] font-[600]">
                                  Owner
                                </label>
                                <br />
                                <Field
                                  type="text"
                                  name={`shares[${index}].owner`}
                                  placeholder="Select"
                                  className="py-1 w-full px-3 mt-1 outline-none h-9 rounded-[10px]"
                                />
                                <ErrorMessage
                                  name={`shares[${index}].owner`}
                                  component="div"
                                  className="text-red-500 text-sm mt-1"
                                />
                                <label className="px-[14px] text-[16px] font-[600]">
                                  Percentage
                                </label>
                                <br />
                                <Field
                                  type="text"
                                  name={`shares[${index}].percentage`}
                                  placeholder="0%"
                                  className="py-1 w-full px-3 mt-1 outline-none h-9 rounded-[10px]"
                                />
                                <ErrorMessage
                                  name={`shares[${index}].percentage`}
                                  component="div"
                                  className="text-red-500 text-sm mt-1"
                                />
                              </div>
                            ))}
                            <div className="flex items-center mt-1">
                              <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    owner: "",
                                    percentage: "",
                                  })
                                }
                                className="mt-3 border text-[12px] font-[600] flex items-center h-[33px] rounded-[5px] gap-x-1 px-2"
                              >
                                <AiOutlinePlus />
                                Add Group Member
                              </button>
                            </div>
                          </div>
                        )}
                      </FieldArray>
                    </div>

                    <div className="w-[45%]">
                      <label className="px-[14px] text-[16px] font-[600]">
                        Comments
                      </label>
                      <br />
                      <Field
                        type="text"
                        name="comments"
                        rows="4"
                        cols="70"
                        placeholder="Comments"
                        className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-20 rounded-[10px]"
                      ></Field>
                    </div>
                  </div>

                  <h2 className="text-[18px] font-[700] mt-4 leading-[27px]">
                    GROUP INFO AND MEMBERS
                  </h2>
                  <button
                    type="button"
                    className=" bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full p-2 mt-2"
                  >
                    <AiOutlinePlus />
                  </button>
                  <br />

                  <button
                    type="submit"
                    // onClick={groupinfomember}
                    className="bg-[#000032] w-1/2 mt-2 text-white px-10 text-center h-[53px] rounded-[100px] text-[20px] font-[400]"
                  >
                    Save
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOwner;
