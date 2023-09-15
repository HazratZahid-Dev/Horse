import React from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";


const OwnerGroup = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate('/contact')
  }

  const newOnwerGroup = () => {
    navigate('/newowner')
  }

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full px-12 py-12  relative">
        {/* top menu Start */}
        <div className=" flex w-full items-center  justify-between h-[60px]">
          <div>
            <h1 className="text-3xl font-black text-[#000000]">CONTACTS </h1>
          </div>
          <div className="flex items-center flex-row gap-x-3">
            <div>
              <form class="flex items-center  w-auto">
                <label for="voice-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    class="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-3xl  focus:border-blue-500 h-[45px] block w-[380px] p-3.5   "
                    placeholder="Search"
                  />
                  <button
                    type="button"
                    class="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-row gap-x-3">
              <MdFilterAlt size={30} />
              <FiPlusCircle  variant="contained"  size={30} />
              {/* <Popover
                id={id}
                style={{marginTop:'60px',marginRight:'10px'}}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
              <div className="bg-[#000032] w-96 text-white">
                <h1 className="text-[18px] text-center py-2 font-[700] leading-[27px]">Filter Contacts</h1>
                <div className="flex items-center justify-center">
                  <hr className="w-[90%]"/>
                </div>
               <div className="p-4 flex gap-3 flex-wrap ">
               <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Brand member</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Dentist</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Bill Pair</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Farrier</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Bam Manager</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Health Provider</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Horse Owner</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Lesse</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Parent</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Lessen Student</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Rider</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Veterinarian</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Staff</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Brand member</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Trainer</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Vendor</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Volunteer</button>
                <button  className="border-white px-3 py-1 rounded border-2" onClick = {gotoContactdetail}>Other</button>

               </div>
              </div>
              </Popover> */}
            </div>
          </div>
        </div>
        {/* top menu End */}

        <div class=" rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border rounded-sm border-gray-900 "
            onClick={gotoContact}
          >
            Contacts
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium   border border-gray-900 rounded-sm bg-gray-900 text-white h-[46px] "
          >
            Owner group
          </button>
        </div>

        {/* page start */}

            <div className="w-1/3"> 
                <hr className="mt-8 border-t-2 text-lg" />

                <h1 className="pt-4 font-[700] text-[20px]">Group 1</h1>
                <div className=" flex justify-between">
                    <div>
                    <p className="pt-2">Owner: Johnson(50%),Ahmad(50%)</p>
                    <p className="">Horses: Harry,Ferris</p>
                    </div>
                    <div className="pt-3">
                    <HiOutlineChevronRight className="text-lg"  onClick={newOnwerGroup}/>
                    </div>
                </div>

                <hr className="mt-8 border-t-2 text-lg" />

                <h1 className="pt-4 font-[700] text-[20px]">Group 2</h1>
                <div className=" flex justify-between">
                    <div>
                    <p className="pt-2">Owner: Johnson(50%),Ahmad(50%)</p>
                    <p className="">Horses: Harry,Ferris</p>
                    </div>
                    <div className="pt-3">
                    <HiOutlineChevronRight className="text-lg" onClick={newOnwerGroup} />
                    </div>
                </div>

                <hr className="mt-8 border-t-2 text-lg" />
            </div>
            
        
      </div>
    </div>
  );
};

export default OwnerGroup;
