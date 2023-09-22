import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const Logout = () => {
  return (
    <div>
        <div>
        <div className='flex items-center w-full text-center'>
        <h2 className='uppercase text-center text-[18px] m-auto flex items-center font-[700] py-2'>Logout</h2>

        </div>
            <hr/>
            <div>
                <p className='text-[14px] font-[400] text-center py-4'>Are you sure you want to log out ?</p>
                <button className="text-[23px]  mt-6 font-[600] w-full bg-gradient-to-r from-[#AE8625]  via-[#cfc973] to-[#AE8625] h-[55px] rounded-full flex flex-col items-center justify-center uppercase" type="button">Logout</button>
                <button className="text-[23px]  mt-6 font-[600] w-full border-[1px] border-black hover:bg-gray-100 h-[55px]   rounded-full flex flex-col items-center justify-center uppercase" type="button">cancel</button>

            </div>
        </div>
    </div>
  )
}

export default Logout