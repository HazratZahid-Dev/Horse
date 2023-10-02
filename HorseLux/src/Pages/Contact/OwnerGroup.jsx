import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import { useSelector } from "react-redux";


const OwnerGroup = () => {
  const User = useSelector((state) => state.auth);

  const navigate = useNavigate();

 

  const newOnwerGroup = () => {
    navigate('/newowner')
  }

  // get Data from api
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log('userIddddddddd',User.data._id)
      const response = await axios.get(`${baseUrl}/groups/${User.data._id}`, responseData);
      console.log('reerfefefeferferferferv',response.data.results);
      setResponseData(response.data.results);
      console.log("My data in arrays::::::::::::", response.data.results);

      console.log('responseeeeeeeeeeeeeeeeeeeeeeeeeee:',responseData)
    } catch (err) {
      setError(err); 
      console.log("errrrrrrr", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="flex ">
      {/* <Sidebar /> */}
      <div className=" w-full    relative">
        {/* top menu Start */}
       


        

        {/* page start */}

           {
            responseData.map((items)=>(
              <div className="w-1/3"> 
                <hr className=" mt-12 border-t-2 text-lg" />

                <h1 className="pt-4 font-[700] text-[20px]">Group 1</h1>
                <div className=" flex justify-between">
                    <div>
                    <p className="pt-2">{items.name}</p>
                    <p className="">Horses: Harry,Ferris</p>
                    </div>
                    <div className="pt-3">
                    <HiOutlineChevronRight className="text-lg cursor-pointer"  onClick={newOnwerGroup}/>
                    </div>
                </div>

                {/* <hr className="mt-8 border-t-2 text-lg" /> */}
{/* 
                <h1 className="pt-4 font-[700] text-[20px]">Group 2</h1>
                <div className=" flex justify-between">
                    <div>
                    <p className="pt-2">Owner: Johnson(50%),Ahmad(50%)</p>
                    <p className="">Horses: Harry,Ferris</p>
                    </div>
                    <div className="pt-3">
                    <HiOutlineChevronRight className="text-lg cursor-pointer" onClick={newOnwerGroup} />
                    </div>
                </div> */}

                {/* <hr className="mt-8 border-t-2 text-lg" /> */}
            </div>
            ))
           }
            
        
      </div>
    </div>
  );
};

export default OwnerGroup;
