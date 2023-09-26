import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OwnerGroup from "./OwnerGroup";
const Contact = () => {
  const [activeButton, setActiveButton] = useState("contacts");
  const [showContact, setShowContact] = useState(true);
  const [showOwner, setshowOwner] = useState(false);

  const navigate = useNavigate();

  const ownerGroup = () => {
    setShowContact(false);
    setActiveButton("ownerGroup");
    setshowOwner(true);
  };
  const handleContact = () => {
    setActiveButton("contacts");
    setShowContact(true);
    setshowOwner(false);
  };

  const gotoOwnerGroup = () => {
    navigate("/ownergroup");
  };

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
          {showContact && (
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
                      class="bg-gray-50 outline-none shadow border-gray-300 text-gray-900 text-sm rounded-3xl  focus:border-blue-500 h-[45px] block w-[380px] p-3.5   "
                      placeholder="Search"
                    />
                    <button
                      type="button"
                      class="absolute  inset-y-0 right-0 flex items-center pr-3"
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
              <div className="flex   flex-row gap-x-3">
                <MdFilterAlt
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  size={32}
                  className="hover:scale-125  cursor-pointer"
                />
                <Popover
                  id={id}
                  style={{ marginTop: "60px", marginRight: "10px" }}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className="bg-[#000032] w-96 text-white">
                    <h1 className="text-[18px] text-center py-2 font-[700] leading-[27px]">
                      Filter Contacts
                    </h1>
                    <div className="flex items-center justify-center">
                      <hr className="w-[90%]" />
                    </div>
                    <div className="p-4 flex gap-3 flex-wrap ">
                      <button className="border-white px-3 py-1 rounded border-2">
                        Brand member
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Dentist
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Bill Pair
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Farrier
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Bam Manager
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Health Provider
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Horse Owner
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Lesse
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Parent
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Lessen Student
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Rider
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Veterinarian
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Staff
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Brand member
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Trainer
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Vendor
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Volunteer
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Other
                      </button>
                    </div>
                  </div>
                </Popover>

                <Link to="/contactdetail">
                  <FiPlusCircle className="text-[32px] hover:scale-125" />
                </Link>
              </div>
            </div>
          )}
          {showOwner && (
            <div className="flex items-center flex-row gap-x-3">
              <div>
                <form class="flex items-center  w-auto">
                  <label for="voice-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative outline-none w-full">
                    <input
                      type="text"
                      id="voice-search"
                      class="bg-gray-50 outline-none shadow border-gray-300 text-gray-900 text-sm rounded-3xl  focus:border-blue-500 h-[45px] block w-[380px] p-3.5   "
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
                <MdFilterAlt
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className="hover:scale-125"
                  size={32}
                />
                <Popover
                  id={id}
                  style={{ marginTop: "60px", marginRight: "10px" }}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <div className="bg-[#000032] w-96 text-white">
                    <h1 className="text-[18px] text-center py-2 font-[700] leading-[27px]">
                      Filter Contacts
                    </h1>
                    <div className="flex items-center justify-center">
                      <hr className="w-[90%]" />
                    </div>
                    <div className="p-4 flex gap-3 flex-wrap ">
                      <button className="border-white px-3 py-1 rounded border-2">
                        Brand member
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Dentist
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Bill Pair
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Farrier
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Bam Manager
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Health Provider
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Horse Owner
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Lesse
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Parent
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Lessen Student
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Rider
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Veterinarian
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Staff
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Brand member
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Trainer
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Vendor
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Volunteer
                      </button>
                      <button className="border-white px-3 py-1 rounded border-2">
                        Other
                      </button>
                    </div>
                  </div>
                </Popover>

                <Link to="/contactdetail">
                  <FiPlusCircle className="text-[32px] hover:scale-125" />
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* top menu End */}

        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={handleContact}
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-gray-900 rounded-l-lg ${
              activeButton === "contacts"
                ? "bg-[#000032] text-white"
                : "bg-white text-gray-900"
            }`}
          >
            Contacts
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm bg-white font-medium text-gray-900 bg-transparent border-t border-b border-r rounded-r-lg border-gray-900 ${
              activeButton === "ownerGroup"
                ? " bg-[#181839] text-white"
                : "bg-white text-gray-900"
            }`}
            onClick={ownerGroup}
          >
            Owner group
          </button>
        </div>

        {/* page start */}
        {showContact && (
          <div className=" w-1/3">
            <div className="">
              <h1 className="pt-3 font-bold ">A</h1>
              <hr className="mt-3" />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Ainhoa York</h1>
              <Link to="/contactinfo">
                <HiOutlineChevronRight className="text-lg" />
              </Link>
            </div>

            <div className="pt-5 flex justify-between gap-x">
              <h1 className="font-bold">Avalyun Bruce</h1>
              <HiOutlineChevronRight className="text-lg" />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Alonso Bravo</h1>
              <HiOutlineChevronRight className="text-lg" />
            </div>

            <div className="pt-5 flex  justify-between gap-x-">
              <h1 className="font-bold">Ainhoa York</h1>
              <HiOutlineChevronRight className="text-lg" />
            </div>

            <div className="pt-5 flex justify-between gap-x-">
              <h1 className="font-bold">Avery McConnell</h1>
              <HiOutlineChevronRight className="text-lg" />
            </div>

            <div className="mt-6">
              <div className="">
                <h1 className="pt-3 font-bold ">B</h1>
                <hr className="mt-3" />
              </div>

              <div className="pt-5 flex justify-between gap-x-">
                <h1 className="font-bold">Brayden Harrington</h1>
                <HiOutlineChevronRight className="text-lg" />
              </div>

              <div className="pt-5 flex justify-between gap-x-">
                <h1 className="font-bold">Braxton Jefferson</h1>
                <HiOutlineChevronRight className="text-lg" />
              </div>

              <div className="pt-5 flex justify-between gap-x-">
                <h1 className="font-bold">Bridget Gonzales</h1>
                <HiOutlineChevronRight className="text-lg" />
              </div>
            </div>
          </div>
        )}
        {showOwner && (
          <>
            <OwnerGroup />
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;
