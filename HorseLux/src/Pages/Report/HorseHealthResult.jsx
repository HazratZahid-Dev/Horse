import React from 'react'
import { Link } from 'react-router-dom'
import coggins from "../../Images/Group 2617.png";
import { BsChevronRight } from 'react-icons/bs';
import Sidebar from '../../Compunents/Sidebar';


const HorseHealthResult = () => {
  return (
    <div className='flex'>
    <Sidebar/>
        <div className='p-12 w-full'>
        <h2 className='text-[30px] font-[700] '>Horse Health Report</h2>
        <hr/>
           <h3 className="text-[20px] leading-[30px] font-[700] py-12">
          Monday, 24, JUNE, 2023
        </h3>
        <div className=" flex items-center justify-between gap-x-5 w-[50%]">
          <div className=" flex items-center gap-x-5">
            <img className="w-[50px] h-[50px]" src={coggins} alt="Coggins" />
            <div>
              <p className="text-[16px] font-[600]">Coggins Renewal - Harry</p>
              <p className="text-[14px] font-[500] text-[#636363]">Coggins</p>
            </div>
          </div>
          <Link to="/report/coggins" type="button">
            <BsChevronRight className="text-xl" />
          </Link>
        </div>
        <hr className='w-1/2 mt-3'/>
    </div>
    </div>
    
  )
}

export default HorseHealthResult