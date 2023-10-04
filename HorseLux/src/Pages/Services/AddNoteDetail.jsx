import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import h1 from "../../Images/h1.png";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseUrl } from "../../config/BaseUrl";

let token = localStorage.getItem("token");

const AddNoteDetail = () => {
  const [HorseData, setHorseData] = useState([]);
  const [SelectedHorse, setSelectedHorse] = useState("");

  const location = useLocation();
  const data = location.state;

  const User = useSelector((state) => state.auth);
  useEffect(() => {
    if (data !== null) {
      setSelectedHorse(data);
    }
  }, [data]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        `${baseUrl}/addnewhorse-data/${User.data._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setHorseData(response.data.horses);
    };
    FetchData();
  }, []);

  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
          Add Note
        </h2>

        <div className="px-10">
          <div className="w-full">
            <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

            <div className="rounded-full mt-2 ">
              <div className="flex gap-x-3">
                {HorseData.filter((opt) => SelectedHorse === opt._id).map(
                  (option) => {
                    return (
                      <div className="rounded-full mt-2 flex flex-col justify-center items-center">
                        <img
                          className="w-[39px] h-[39px] rounded-full object-fill"
                          src={option.img}
                        />
                        <p className="text-[10px] font-[600] text-center mt-1">
                          {option.showName}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add Detail
              </h2>
              <form className="w-full">
                <div className="flex gap-x-16">
                  <div className="w-1/2">
                    <div className="flex justify-between  ">
                      <div className="w-full ">
                        <label className="px-[14px]  text-[16px] font-[600] ">
                          Date
                        </label>
                        <br />
                        <input
                          type=" text"
                          placeholder="22-jun-2023"
                          className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                        ></input>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2  ">
                      <div className=" w-full">
                        <label className="px-[14px]   text-[16px] font-[600] ">
                          Time
                        </label>
                        <br />
                        <input
                          type="text"
                          //   onChange={handleQuantityChange}
                          //   value={quantity}
                          placeholder="12:30pm"
                          className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                        ></input>
                      </div>
                    </div>
                    <div className="flex justify-between mt-2  "></div>

                    <div className=" justify-between   w-[45%]   ">
                      <label className="px-1  py-3 text-[16px] font-[600] ">
                        Add Attachments
                      </label>
                      <div className="flex items-center ">
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
                          onChange={handleFileChange}
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

                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Comment
                    </label>
                    <br />
                    <textarea
                      type=" text"
                      placeholder="Add Comments"
                      rows="30"
                      className="py-1 h-32 border px-3 w-full shadow-md mt-1 outline-none  rounded-[10px]"
                    ></textarea>
                  </div>
                </div>

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
    </div>
  );
};

export default AddNoteDetail;
