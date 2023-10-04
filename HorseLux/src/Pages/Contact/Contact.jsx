import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { MdFilterAlt } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import OwnerGroup from "./OwnerGroup";
import "../../Style/ContactScroll.css";
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";
const Contact = () => {
  const [activeButton, setActiveButton] = useState('Contacts');
  const [showContact, setShowContact] = useState(true);
  const [showOwner, setshowOwner] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const ownerGroup = () => {
    setShowContact(false);
    setActiveButton("Ownergroups");
    setshowOwner(true);
  };
  const handleContact = () => {
    setActiveButton('Contacts');
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

  // get Data

  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/userdata`, responseData);
      console.log(response.data);
      setResponseData(response.data.contacts);
      console.log("My data********:", response.data);
    } catch (err) {
      setError(err);
      console.log("errrrrrrr", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // order name
  const groupedData = {};

  // Group data by the first letter of first_name
  responseData.forEach((item) => {
    const firstLetter = item.first_name.charAt(0).toUpperCase();
    if (!groupedData[firstLetter]) {
      groupedData[firstLetter] = [];
      console.log("gorup dataaaaaaaaaaa", groupedData);
    }
    groupedData[firstLetter].push(item);
  });

  // search name in the contact

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // search data
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = responseData.filter((item) =>
    `${item.first_name} ${item.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // console.log("dfdfdgfgtghhjhjjjhyhtyj", filteredContacts);

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
                      value={searchQuery}
                      onChange={handleSearch}
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

                <Link to="/newowner">
                  <FiPlusCircle className="text-[32px] hover:scale-125" />
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* top menu End */}

        <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        onClick={handleContact}
        type="button"
        className={`px-4 py-2 text-sm font-medium border border-gray-900 rounded-l-lg ${
          activeButton === 'Contacts' ? 'bg-[#000032] text-white' : ''
        }`}
      >
        Contacts
      </button>
      <button
        onClick={ownerGroup}
        type="button"
        className={`px-4 py-2 text-sm font-medium bg-white text-gray-900 bg-transparent border-t border-b border-r rounded-r-lg border-gray-900 ${
          activeButton === 'Ownergroups' ? 'bg-[#0a0a1d]' : ''
        }`}
      >
        Owner group
      </button>
    </div>

      
        {showContact && (
          <>
            <div className="w-1/3 h-96 breadScroll mt-3 overflow-y-auto">
              {alphabet.split("").map((letter) => (
                <div key={letter}>
                  {groupedData[letter] &&
                    groupedData[letter].some((item) =>
                      `${item.first_name} ${item.last_name}`
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) && (
                      <div>
                        <div>
                          <h1 className="pt-3 font-bold ">{letter}</h1>
                          <hr className="mt-3" />
                        </div>

                        <div className="pt-5 flex-col flex space-y-1 justify-between gap-x-">
                          {groupedData[letter]
                            .filter((item) =>
                              `${item.first_name} ${item.last_name}`
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                            )
                            .map((item, index) => (
                              <div
                                className="flex items-center space-y-3 justify-between"
                                key={index}
                              >
                                <h1 className="text-[16px] font-[600]">
                                  {item.first_name} {item.last_name}
                                </h1>
                                <Link to={`/contactinfo/${item._id}`}>
                                  <HiOutlineChevronRight className="text-lg" />
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </>
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
// F;
