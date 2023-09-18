import React from 'react'
import { allRecordType } from '../../../config/Horses'

const AllRecordType = () => {
  return (
    <div>
        <div className='flex items-center gap-x-8 py-2'>
            <h2 className='text-[20px] font-[700]'>Record Type</h2>
            <div className='h-4 w-[2px] bg-[#000032]'></div>
            <h2 className='text-[20px] font-[700]'>
            Choose a health record Type
            </h2>
        </div>
       <div className='flex flex-wrap gap-4 w-[90%] '>
       {
           allRecordType.map((items)=>(
        <div className=' w-[14.29%] py-3'>
                <img src={items.img} className='m-auto w-[36px] h-[36px]'/>
                <p className='text-[12px] py-2 text-center font-[600] leading-[18px]'>{items.coggins}</p>
            </div>
           )) 
        }
       </div>
    </div>
  )
}

export default AllRecordType