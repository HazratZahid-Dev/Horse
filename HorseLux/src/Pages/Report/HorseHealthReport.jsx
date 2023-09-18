import React from 'react'
import Sidebar from '../../Compunents/Sidebar'
import m1 from '../../Images/M1.png'
import { allRecordType, healthRecordType } from '../../config/Horses'

const HorseHealthReport = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full px-12 '>
      <h2 className='text-[30px] font-[700] text-center leading-[45px]'>Horse Health Record</h2>
      <h2  className='text-[24px] font-[700]  leading-[36px]'>Time Frame</h2>
      <div className='flex px-5 gap-x-8 py-1'>
        <h4 className='text-[16px] font-[600]'>09-May-2023 </h4>
        <h4 className='text-[16px] font-[600]'>To</h4>
        <h4 className='text-[16px] font-[600]'>09-Augast-2023 </h4>

      </div>
      <hr/>
      <div>
        <h2  className='text-[24px] font-[700]  leading-[36px]'>Selected Horse</h2>
        <div className='py-1'>
          <img src={m1} className='w-[39px] h-[39px]'/>
          <p className='text-[13px] font-[600]  w-[60px] '>Ferris</p>
        </div>
      </div>
      <hr/>
      <div className='w-full py-1'>
      <div className='flex justify-between items-center w-1/2 py-3'>
        <h2 className='text-[15px] font-[700] leading-[22px]'>Select Record Type</h2>
        <div className='flex gap-x-2 items-center'>
          <label className='text-[13px] font-[600]'>Select all</label>
          <input type='radio'/>
        </div>
      </div>
      </div>
      <div className='flex justify-between  gap-x-28'>
      <div className='w-1/2 space-y-3'>
        {
          healthRecordType.slice(0,6).map((items)=>(
            <div className=' items-center'>
           <div className=' flex justify-between'>
           <div className='flex items-center gap-x-3'>
           <img src={items.img} className='w-[38px] h-[38px]'/>
           <p>{items.coggins}</p>
           </div>
            <input type='radio'/>
           </div>
            <hr className='mt-2'/>

            </div>
          ))
        }
        <button  className="bg-[#000032]  text-white w-full text-center h-[53px] rounded-[100px] text-[20px] font-[400]">Generate Report</button>

      </div>
      <div className='w-1/2 space-y-3'>
        {
          healthRecordType.slice(6,12).map((items)=>(
            <div className=' items-center'>
           <div className=' flex justify-between'>
           <div className='flex items-center gap-x-3'>
           <img src={items.img} className='w-[38px] h-[38px]'/>
           <p>{items.coggins}</p>
           </div>
            <input type='radio'/>
           </div>
            <hr className='mt-2'/>

            </div>
          ))
        }
      </div>
      </div>

      </div>
    </div>
  )
}

export default HorseHealthReport