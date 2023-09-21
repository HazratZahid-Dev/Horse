import React from 'react'
import Sidebar from '../../Compunents/Sidebar'
import data from "../../config/Data";
import h1 from "../../Images/h1.png";
import { BsSearch } from 'react-icons/bs';
import { chooseRecordtype } from '../../config/HorseDetail';
import {BiChevronRight} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';



const ChooseRecordType = () => {
    const navigate = useNavigate();
const toRenewal=()=>{
    navigate('/addcoggingrenewal')

}
  return (
    <div className='flex'>
        <Sidebar/>
        <div className="w-full p-5">
        <div className="text-[30px] font-[700] text-center">
          Choose Record Type
        </div>
        <div className="w-1/2 px-3">
          <div className="w-full">
            <h2 className="w-full text-[20px] font-[700] py-3 ">Choose Renewal Record Type</h2>

            
          </div>
          <hr className="mt-6"/>
         
          <div className=" space-y-3 mt-5 ">
          {chooseRecordtype.map((items) => (
              <>
              <div className="flex items-center gap-x-3">
                <img
                  src={items.img}
                  className="w-[39px] h-[39px] rounded-full"
                />
                <div className="w-full flex justify-between">
                 <div>
                 <p className="text-[15px] font-[600]">{items.cate}</p>
                 
                 </div>
              <Link to={items.link}>
              <BiChevronRight className='text-3xl cursor-pointer'/>
              </Link>
                </div>
            

              </div>
              <hr/>
              </>
            ))}
        

           <div>
       
           </div>
          
          </div>
          <button  onClick={toRenewal}  className="bg-[#000032] mt-5 text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]">Next</button>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  )
}

export default ChooseRecordType