import React from 'react'
import Sidebar from '../../Compunents/Sidebar'

const Summary = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='p-12 w-full'>
        <h2 className="text-[30px] w-full  font-[700] px-12 mt-5">
            Summary
            <hr className="mt-2 px-12 " />
            <h3 className='text-[24px] font-[700]'>DETAILS</h3>
            <div className='w-[30%] space-y-2 py-4'>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px] font-[700]'>SHOW NAME :</p>
                    <p className='text-[20px] font-[500]'>SunShine</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px] font-[700]'> NAME :</p>
                    <p className='text-[20px] font-[500]'>Harry</p>
                </div><div className='flex justify-between items-center'>
                    <p className='text-[20px] font-[700]'>RECORD :</p>
                    <p className='text-[20px] font-[500]'>Coggins</p>
                </div><div className='flex justify-between items-center'>
                    <p className='text-[20px] font-[700]'>DATE :</p>
                    <p className='text-[20px] font-[500]'>9 May 2023</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px] font-[700]'>DUE DATE :</p>
                    <p className='text-[20px] font-[500]'>20 Jun 2023</p>
                </div>
                
            </div>
        </h2>

        </div>
    </div>
  )
}

export default Summary