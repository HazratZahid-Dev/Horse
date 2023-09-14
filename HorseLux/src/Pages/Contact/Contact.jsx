import React from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
const Contact = () => {
  const navigate = useNavigate();
  const navigateto = () => {
    navigate("/contactinfo");
  };

  const gotoContactdetail = () => {
    navigate('/contactdetail')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full px-12 py-12  relative">
        {/* top menu Start */}
        <div className=" flex w-full items-center  justify-between h-[60px]">
          <div>
            <h1 className="text-3xl font-black text-[#000000]">CONTACTS</h1>
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
              <FiPlusCircle aria-describedby={id} variant="contained" onClick={handleClick} size={30} />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
              <div className="bg-[#000032] text-white">
                <h1 className="">Filter Contacts</h1>
                <Button style={{ color: "white" }} className="border-white border-2" onClick = {gotoContactdetail}>Brand member</Button>
              </div>
              </Popover>
            </div>
          </div>
        </div>
        {/* top menu End */}

        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium   border border-gray-900 rounded-l-lg bg-gray-900 text-white h-[46px] "
          >
            Contacts
          </button>
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-r rounded-r-lg border-gray-900"
          >
            Owner group
          </button>
        </div>

        {/* page start */}

        <div className=" w-1/3">
          <div className="">
            <h1 className="pt-3 font-bold ">A</h1>
            <hr className="mt-3" />
          </div>

          <div className="pt-5 flex justify-between gap-x-">
            <h1 className="font-bold">Ainhoa York</h1>
            <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
          </div>

          <div className="pt-5 flex justify-between gap-x">
            <h1 className="font-bold">Avalyun Bruce</h1>
            <HiOutlineChevronRight onClick={navigateto} className="text-lg" />
          </div>

          <div className="pt-5 flex justify-between gap-x-">
            <h1 className="font-bold">Alonso Bravo</h1>
            <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
          </div>

          <div className="pt-5 flex  justify-between gap-x-">
            <h1 className="font-bold">Ainhoa York</h1>
            <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
          </div>

          <div className="pt-5 flex justify-between gap-x-">
            <h1 className="font-bold">Avery McConnell</h1>
            <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
          </div>

          <div className="mt-6">
            <div className="">
              <h1 className="pt-3 font-bold ">B</h1>
              <hr className="mt-3" />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Brayden Harrington</h1>
              <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Braxton Jefferson</h1>
              <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Bridget Gonzales</h1>
              <HiOutlineChevronRight className="text-lg" onClick={navigateto} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
