import React, { useEffect } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdCall } from "react-icons/md";
import { BiEdit, BiSolidMessageDetail } from "react-icons/bi";
import h from "../../Images/h.png";
import { useState } from "react";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { useParams, useNavigate } from "react-router";
import { baseUrl } from "../../config/BaseUrl";
import { FaTrashAlt } from "react-icons/fa";
// import { useParams, Link,  } from "react-router-dom";
const ContactInfo = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [anchorSex, setAnchorSex] = useState(null);
  const handleSex = (event) => {
    setAnchorSex(event.currentTarget);
  };
  const handleCloseSex = () => {
    setAnchorSex(null);
  };
  const openSex = Boolean(anchorSex);
  const idSex = openSex ? "simple-popover" : undefined;
  const handleSelectSex = (sex) => {
    setSelectedSex(sex);
    setAnchorSex(null);
  };
  const { _id } = useParams();

  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdata`, responseData);
      console.log(response.data);
      setResponseData(response.data.contacts);
    } catch (err) {
      if (err.response) {
        console.error(
          "Server responded with status code:",
          err.response.status
        );
      } else if (err.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error:", err.message);
      }
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const specificItem = responseData.find((item) => item._id === _id);

  console.log("idddd", specificItem);

  const handleDeleteContact = async () => {
    try {
      const response = await axios.delete(
        `${baseUrl}/update/${specificItem._id}`
      );
      if (response.status === 200) {
        console.log("Contact deleted successfully.");
        alert("deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  console.log("the specific person id is ::::::", specificItem);
  const navigate = useNavigate();
  // const history = useHistory();

  const toContactdetail = () => {
    navigate(`/contactdetail`, { state: { id: specificItem?._id } });

    console.log("click meeeeeeee");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-12 py-8 ">
        <h1 className="text-[30px] font-[700] text-[#000000] text-center">
          CONTACTS
        </h1>

        {specificItem && (
          <>
            <div className="flex items-center justify-between">
              <div className="py-5 flex items-center gap-x-10">
                <h1 className="font-[700] text-[22px]">
                  {specificItem.first_name} {specificItem.last_name}
                </h1>
                <div className="h-5 w-[2px] bg-black"></div>
                <h1 className=" text-[18px] font-[700]">Horse Owner</h1>
              </div>
              <div className="flex gap-x-4">
                <button
                  type="button"
                  // to="/contactdetail"
                  onClick={toContactdetail}
                  className="cursor-pointer hover:scale-110 bg-[#000032] text-white p-2 rounded-full"
                >
                  <BiEdit size={24} />
                </button>
                <button className=" cursor-pointer hover:scale-110 bg-[#000032] text-white p-2 rounded-full">
                  <FaTrashAlt
                    className=""
                    size={24}
                    onClick={handleDeleteContact}
                  />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <h1 className="text-[20px] font-[700]">Owned Horses</h1>
              <div className="w-[39px] h-[39px] rounded-full mt-2 ml-3">
                <img
                  className="h-full w-full rounded-full object-fill "
                  src={h}
                  alt="Horse"
                />
                <p className="text-[13px] font-[600] text-center mt-1 ">
                  Ferris
                </p>
              </div>
            </div>

            <div className="pt-8 w-[400px]">
              <hr />
            </div>

            <div className="mt-10">
              <h1 className="font-[700] text-[20px]">CONTACT INFORMATION</h1>
              <div className="mt-8 w-[37%] flex justify-between">
                <p className="text-[16px] flex gap-x-2  font-[600]">
                  Primary Phone:
                  <span className="font-[400]">
                    {specificItem.primary_phone}
                  </span>
                </p>
                <MdCall className="border-2 rounded-2xl border-black p-1 text-3xl" />
              </div>
            </div>

            <div className="mt-6 flex justify-between w-[37%]">
              <p className="text-md font-[600]">
                Email: <span className="font-[400]">{specificItem.email}</span>
              </p>
              <AiOutlineMail className="border-2 rounded-2xl ml-[1%] border-black p-1 text-3xl" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
