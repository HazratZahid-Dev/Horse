import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import h1 from "../../Images/h1.png";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { addservicesData } from "../../config/Horses";

const BodyClip = () => {
  // const { index } = useParams();
 
  const { index, price } = useParams();

  const navigate = useNavigate();
  const toHome = () => {
    navigate("/dashboard");
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const pricee = addservicesData[index].price;
  const [totalCost, setTotalCost] = useState(price);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const [pric, setPrice] = useState(addservicesData[index].price);
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setTotalCost(newQuantity * pricee);
  };
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="text-[30px] w-full py-3 font-[700] text-center">
          {addservicesData[index].service}
        </h2>

        <div className="px-10">
          <div className="w-full">
            <h2 className="w-full text-[20px] font-[700] ">Selected Horse</h2>

            <div className="w-[39px] h-[39px] rounded-full mt-2 ">
              <img
                className="h-full w-full rounded-full object-fill"
                src={h1}
              />
              <p className="text-[10px] font-[600] text-center mt-1">Ferrier</p>
            </div>
            <hr className="mt-6 w-1/2" />
            <div className="w-full">
              <h2 className="w-full text-[20px] font-[700] py-2 ">
                Add Detail
              </h2>
              <form className="w-full">
                <div className="flex justify-between  ">
                  <div className="w-[45%] ">
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
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Price
                    </label>
                    <br />
                    <input
                      type="text"
                      onChange={handlePriceChange}

                      value={pric}
                    
                      className="py-1 border px-3 w-full flex items-center shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Quantity
                    </label>
                    <br />
                    <input
                     type="text"
                  onChange={handleQuantityChange}
                  value={quantity}
                      placeholder="1"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                  <div className="w-[45%]">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Cost
                    </label>
                    <br />
                    <input
                       type="text"
                  value={totalCost}
                      placeholder="$100"
                      className="py-1 border px-3 w-full shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
                  </div>
                </div>
                <div className="flex justify-between mt-2  ">
                  <div className="w-[45%] ">
                    <label className="px-[14px]   text-[16px] font-[600] ">
                      Adminstrated By
                    </label>
                    <br />
                    <input
                      type=" text"
                      placeholder="Select Contact"
                      className="py-1 w-full border px-3 shadow-md mt-1 outline-none h-12 rounded-[10px]"
                    ></input>
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

                <div className=" justify-between   w-[45%] -mt-16  ">
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
                <div className=" justify-between   w-[45%]  "></div>
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

export default BodyClip;
