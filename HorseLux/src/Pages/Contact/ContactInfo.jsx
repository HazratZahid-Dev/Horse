import React from 'react';
import Sidebar from '../../Compunents/Sidebar';
import { MdCall } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import h from '../../Images/h.png';
import { useState } from 'react';



const ContactInfo = () => {

    const [selectedSex, setSelectedSex] = useState("");
    const [anchorSex, setAnchorSex] = useState(null);
    const handleSex = (event) => {
      setAnchorSex(event.currentTarget);
    };
    const handleCloseSex = () => {
      setAnchorSex(null);
    };
    const openSex = Boolean(anchorSex);
    const idSex = openSex ? "simple-popover" : undefined;
    const handleSelectSex = (sex) => {
      setSelectedSex(sex);
      setAnchorSex(null); 
    };


    return(
        <div className='flex'>
            <Sidebar/>
            <div className='w-full px-12 py-8 '>
                <h1 className='text-3xl font-black text-[#000000] text-center'>CONTACTS</h1>
                <div className='py-5 flex gap-x-10'>
                    <h1 className='font-bold text-2xl'>ADAM SMITH</h1>
                    <div className='h-7 w-1 bg-black'></div>
                    <h1 className='font-bold text-xl'>Horse Owner</h1>
                    <div className='h-7 w-1 bg-black'></div>
                    <MdCall className='border-2 rounded-2xl border-black p-1 text-3xl'/>
                    <BiSolidMessageDetail className='border-2 rounded-2xl border-black p-1 text-3xl'/>
                </div>

                <div className='pt-4 '>
                    <h1 className='text-2xl font-bold'>Owned Horses</h1>
                    <div className="w-[39px] h-[39px] rounded-full mt-2 ml-3">
                        <img
                          className="h-full w-full rounded-full object-fill "
                          src={h} />
                        <p className="text-[13px] font-[600] text-center mt-1 ">Ferris</p>
                        
                    </div>
                </div>

                <div className='pt-8 w-[400px]'>
                    <hr />
                </div>

                <div className='mt-10'>
                    <h1 className='font-bold text-2xl'>CONTACT INFORMATION</h1>
                    <div className='mt-8 w-1/3 flex gap-x-16'>
                        <p className='text-md font-[600]'>Primary Phone: <span className='font-[400]'> 08198128192891 </span></p>
                        <div className='flex gap-x-2 '>
                        <MdCall className='border-2 rounded-2xl border-black p-1 text-3xl'/>
                        <BiSolidMessageDetail className='border-2 rounded-2xl border-black p-1 text-3xl'/>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                        <p className='text-md font-[600]'>Email <span className='font-[400]'> adamsmith@gmail.com </span></p>
                </div>
                
            </div>
        </div>
    )
};

export default ContactInfo;