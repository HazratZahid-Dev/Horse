import React from 'react'

const PastMonth = () => {
  return (
    <div className='w-[30%] '>
    <div className='space-y-5 mt-4'>
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
            Past Week
        </button>
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
        Past Month
        </button>
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
        Past Year
        </button>
     
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
        All Time
        </button>
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
        Next 6 Month

        </button>
        <button className='w-full border-[1px] border-[#000032] shadow h-[40px] text-[20px] font-[700] rounded-[5px]'>
         Custome
        </button>
    </div>


    </div>
  )
}

export default PastMonth