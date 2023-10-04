// export default UploadContact;
import React, { useState } from "react";
import Sidebar from "../../../Compunents/Sidebar";
import {
  AiFillCaretRight,
  AiOutlineCaretRight,
  AiOutlinePlus,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../config/BaseUrl";

let token = localStorage.getItem("token");

const UploadContact = () => {
  // Use state to track whether "Other Document" is selected
  const [isOtherDocumentSelected, setIsOtherDocumentSelected] = useState(false);

  // Function to handle radio button change
  const handleRadioButtonChange = (event) => {
    setIsOtherDocumentSelected(event.target.id === "release2");
  };

  const [formData, setFormData] = useState({
    contact: "",
    title: "",
    desc: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data !== null) {
      const selected_contact = JSON.parse(data).contact;
      setFormData({
        contact: selected_contact,
        title: "",
        desc: "",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      navigate("/uploadcontact", { state: null });
      return confirmationMessage;
    };

    // Attach the event listener when the component is mounted
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // repeated data
    const similar_data = {
      contact: formData.contact,
      document_type: "Other Document",
    };
    const response = await axios.post(
      `https://hurseluxprojectupdate-production.up.railway.app/add-contact-upload`,
      similar_data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
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
              className="outline-none w-full h-full cursor-pointer"
              type=" text"
              placeholder="Select..."
              name="contact"
              onChange={handleInputChange}
              value={formData.contact}
              onClick={() =>
                navigate("/contact", {
                  state: JSON.stringify({
                    calling: "uploadcontact",
                  }),
                })
              }
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
                  checked={!isOtherDocumentSelected}
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
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
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
                    value={formData.desc}
                    onChange={handleInputChange}
                    className="w-[380px] px-4 py-1 h-[120px] border  shadow-md  outline-none rounded-[10px]"
                    placeholder="Description"
                    name="desc"
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
                onClick={onSubmit}
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
