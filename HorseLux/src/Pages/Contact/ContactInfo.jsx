import React, { useEffect } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdCall } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import h from "../../Images/h.png";
import { useState } from "react";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { useParams } from "react-router";
import { baseUrl } from "../../config/BaseUrl";

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

  console.log('my iddddddddddd',_id)
  // fetch data from api
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/userdata/${_id}`,responseData);
  //     console.log(response.data);
  //     setResponseData(response.data.contacts);
  //     console.log("My data********:", response.data);
  //   } catch (err) {
  //     setError(err);
  //     console.log('errrrrrrr',err);
  //   }
  // };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdata`, responseData);
      // /${_id}
      console.log(response.data);
      setResponseData(response.data.contacts);
    } catch (err) {
      // Handle error
      if (err.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.error("Server responded with status code:", err.response.status);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something else went wrong
        console.error("Error:", err.message);
      }
      setError(err);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);


  // const { id } = useParams(); // Extract 'id' from the URL

  // const [personData, setPersonData] = useState(null); // Store person data

  // useEffect(() => {
  //   // Fetch the specific person's data using the 'id'
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://hurseluxprojectupdate-production.up.railway.app/userdata/${id}`);
  //       console.log(response.data);
  //       setPersonData(response.data); // Set the person's data
  //     } catch (err) {
  //       setError(err);
  //       console.log('Error:', err);
  //     }
  //   };

  //   fetchData();
  // }, [id]); // Include 'id' as a dependency to refetch data when the 'id' changes.


  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full px-12 py-8 ">
        <h1 className="text-[30px] font-[700] text-[#000000] text-center">
          CONTACTS
        </h1>
     {
      responseData.map((item)=>(
        <>   <div className="py-5 flex items-center gap-x-10">
          <h1 className="font-[700] text-[22px]">{item.first_name} {item.last_name}</h1>
          <div className="h-5 w-[2px] bg-black"></div>
          <h1 className=" text-[18px] font-[700]">Horse Owner</h1>
          {/* <div className="h-5 w-[2px] bg-black"></div> */}
          {/* <MdCall className="border-2 rounded-2xl border-black p-1 text-3xl" /> */}
          {/* <BiSolidMessageDetail className="border-2 rounded-2xl border-black p-1 text-3xl" /> */}
        </div>

        <div className="pt-4 ">
          <h1 className="text-[20px] font-[700]">Owned Horses</h1>
          <div className="w-[39px] h-[39px] rounded-full mt-2 ml-3">
            <img className="h-full w-full rounded-full object-fill " src={h} />
            <p className="text-[13px] font-[600] text-center mt-1 ">Ferris</p>
          </div>
        </div>

        <div className="pt-8 w-[400px]">
          <hr />
        </div>

        <div className="mt-10">
          <h1 className="font-[700] text-[20px]">CONTACT INFORMATION</h1>
          <div className="mt-8 w-[37%] flex justify-between">
            <p className="text-[16px] flex gap-x-2  font-[600]">
              Primary Phone:<span className="font-[400]"> {item.primary_phone} </span>
            </p>
              <MdCall className="border-2 rounded-2xl border-black p-1 text-3xl" />
          </div>
        </div>

        <div className="mt-6 flex justify-between w-[37%]">
          <p className="text-md font-[600]">
            Email: <span className="font-[400]"> {item.email} </span>
          </p>
          <AiOutlineMail className="border-2 rounded-2xl ml-[1%] border-black p-1 text-3xl" />

        </div></>
      ))
     }
      </div>
    </div>
  );
};

export default ContactInfo;
