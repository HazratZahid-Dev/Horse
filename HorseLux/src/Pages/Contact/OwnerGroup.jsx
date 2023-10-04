import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { getOwnerId } from "../../store/Slices/OwnerGroupSlice";


const OwnerGroup = () => {
  const User = useSelector((state) => state.auth);
const dispatch=useDispatch()
  const navigate = useNavigate();

 

  const newOnwerGroup = () => {
    navigate('/newowner')
  }

  // get Data from api
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
    
      const response = await axios.get(`${baseUrl}/groups/${User.data._id}`, responseData);
      console.log('reerfefefeferferferferv',response.data.results);
      setResponseData(response.data.results);
      let data=response.data.results
      console.log('used Iddddddddd',User.data._id)
  
    
    data.forEach(item => {
        const shares = item.shares;
    
        // Now you can access the values within the "shares" object
        for (const key in shares) {
            if (shares.hasOwnProperty(key)) {
                const value = shares[key];
               console.log(value);
            }
        }
    })
    
    
    
    
    
    

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
            responseData.map((items,index)=>(
              <div className="w-1/3"> 
                <hr className=" mt-12 border-t-2 text-lg" />

                <h1 className="pt-4 font-[700] text-[20px]">Group {index}</h1>
                <div className=" flex justify-between items-center">
                    <div>
                    <p className="pt-2 text-[18px]  font-[600]"><span>Owner:</span> 
                    {
                      
                    
                      Object.entries(items.shares).map(([key, value]) => (
                            <p key={key} className="flex">
                                {key}: {value}
                            </p>
                        ))

                    }
                 </p>
                    <p className=" text-[18px] font-[600]">Horses: Harry,Ferris</p>
                    </div>
                    <div className="pt-3">
                    <Link to={`/newowner`} onClick={()=>dispatch(getOwnerId(items?._id))}>
                    <HiOutlineChevronRight className="text-lg cursor-pointer" />

                    </Link>
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
