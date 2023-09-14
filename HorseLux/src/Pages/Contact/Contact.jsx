import React from 'react';
import Sidebar from '../../Compunents/Sidebar';
import { MdFilterAlt } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
const Contact = () => {
    return (
        <div className='flex '>
            <Sidebar />
            <div className=" w-full px-12 py-12  relative">
                {/* top menu Start */}
                <div className=' flex w-full items-center  justify-between h-[60px]'>
                    <div><h1 className='text-3xl font-black text-[#000000]'>CONTACTS</h1></div>
                    <div className='flex items-center flex-row gap-x-3'>

                        <div>
                            <form class="flex items-center  w-auto">
                                <label for="voice-search" class="sr-only">Search</label>
                                <div class="relative w-full">

                                    <input type="text" id="voice-search" class="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-3xl  focus:border-blue-500 h-[45px] block w-[380px] p-3.5   " placeholder="Search" />
                                    <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>

                            </form>
                        </div>
                        <div className='flex flex-row gap-x-3'>
                            <MdFilterAlt size={30} />
                            <FiPlusCircle size={30} />
                        </div>


                    </div>
                </div>
                {/* top menu End */}

                
<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium   border border-gray-900 rounded-l-lg bg-gray-900 text-white h-[46px] ">
    Contacts
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r rounded-r-lg border-gray-900">
    Owner group
  </button>
 
</div>






            </div>
        </div>
    );
}

export default Contact;
