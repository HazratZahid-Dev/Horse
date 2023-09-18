import React from 'react'
import Sidebar from '../../Compunents/Sidebar'
import { AiOutlineCaretDown, AiOutlineRight } from 'react-icons/ai'
import coggins from '../../Images/Group 2617.png'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Activity = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-full px-12 py-12'>
        <h2 className='text-[35px] font-[700] leading-[45px] py-1'>Activity</h2>
        <hr/>
      
        <Tabs>
    <TabList className='py-3 flex justify-between items-center w-[60%]'>
    <Tab type='button' className=' px-2 rounded-[5px] py-1 bg-[#000032] text-white text-[18px] flex items-center gap-x-2 font-[700] leading-[27px]'>All Horse <AiOutlineCaretDown className='text-xl'/></Tab>
    <Tab type='button' className=' px-2 rounded-[5px] py-1 bg-[#000032] text-white text-[18px] flex items-center gap-x-2 font-[700] leading-[27px]'>All Record Type <AiOutlineCaretDown className='text-xl'/></Tab>
    <Tab type='button' className=' px-2 rounded-[5px] py-1 bg-[#000032] text-white text-[18px] flex items-center gap-x-2 font-[700] leading-[27px]'>All Account<AiOutlineCaretDown className='text-xl'/></Tab>
    <Tab type='button' className=' px-2 rounded-[5px] py-1 bg-[#000032] text-white text-[18px] flex items-center gap-x-2 font-[700] leading-[27px]'>Past Month <AiOutlineCaretDown className='text-xl'/></Tab>

  
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        <h3 className='text-[20px] leading-[30px] font-[700] py-12'>
          Monday, 24,JUNE,2023
        </h3>
        <div className=' flex items-center justify-between gap-x-5 w-[50%]'>
         <div className=' flex items-center gap-x-5'>
         <img className='w-[50px] h-[50px]' src={coggins}/>
          <div>
            <p className='text-[16px] font-[600]'>Coggins Renewal - Harry</p>
            <p className='text-[14px] font-[500] text-[#636363]'>Coggins</p>
            
          </div>
         </div>
         <Link to='/report/coggins' type='button' className=''>
         <BsChevronRight className='text-xl'/>

         </Link>
        </div>
        <hr className='w-[50%] h-2 mt-5'/>

        </div>
    </div>
  )
}

export default Activity