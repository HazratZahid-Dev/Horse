import React from 'react'
import Sidebar from '../../Compunents/Sidebar'
import dTime from '../../Images/reportImage/deliveryTime.png'
import heart from '../../Images/reportImage/heart.png'
import dateTo from '../../Images/reportImage/DateTo.png'
import temp from '../../Images/reportImage/Temperature.png'
import user from '../../Images/reportImage/User.png'
import barley from '../../Images/reportImage/Barley.png'
import { Link } from 'react-router-dom'






const HorseReport = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-full px-12 py-12 '>
        <h2 className='text-[35px] font-[700] leading-[45px]'>Horse Report</h2>
        <hr/>
        <div className='w-[30%] mt-5 flex items-center justify-between flex-wrap  gap-6'>
        <Link to='/report/activity' className='border hover:border-gray-400 w-[140px] hover:scale-105 cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={dTime} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>
        <Link className='border hover:border-gray-400 w-[140px] hover:scale-105 cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={heart} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>
        <Link className='border hover:border-gray-400 w-[140px] hover:scale-105 cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={dateTo} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>
        <Link className='border hover:border-gray-400 w-[140px] hover:scale-105 cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={temp} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>
        <Link className='border hover:border-gray-400 w-[140px] hover:scale-105 cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={user} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>
        <Link className='border hover:border-gray-400 w-[140px] hover:scale-105  cursor-pointer flex items-center justify-center shadow-xl h-[150px] rounded-[18px]'>
           <img src={barley} alt='dTime' className='w-[63px] hover:scale-110 h-[63px]'/>
        </Link>


        </div>
       
        </div>
    </div>
  )
}

export default HorseReport