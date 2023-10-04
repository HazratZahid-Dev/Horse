import React from "react";
import Sidebar from "../../../Compunents/Sidebar";
import { BsChevronRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Breading = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <h2 className="w-full text-[30px] leading-[45px] font-[700] text-center ">
          Choose Record Type
        </h2>

        <div className="flex items-center justify-center">
          <div className="w-[35%] pl-12">
            <h2 className="text-[24px] py-5 font-[600] leading-[36px]">
              Selected Type Of Event
            </h2>
            <div>
              <div>
                <div
                  onClick={() =>
                    navigate("/horse-selection", {
                      state: JSON.stringify({
                        heading: "Add Milk Test",
                        navigate_to: "/milktest",
                      }),
                    })
                  }
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Milk Test
                  <BsChevronRight className="" />
                </div>
                <hr className="" />
              </div>
              <div className="">
                <Link
                  to="/foaling"
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Foaling
                  <BsChevronRight className="" />
                </Link>
                <hr className="" />
              </div>
              <div className="">
                <Link
                  to="/addminsem"
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Insemination
                  <BsChevronRight className="" />
                </Link>
                <hr className="" />
              </div>
              <div className="">
                <Link
                  to="/addovulation"
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Ovulation
                  <BsChevronRight className="" />
                </Link>
                <hr className="" />
              </div>
              <div className="">
                <Link
                  to="/addpreg"
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Pregnancy Check
                  <BsChevronRight className="" />
                </Link>
                <hr className="" />
              </div>
              <div className="">
                <Link
                  to="/seman"
                  className="flex items-center py-2 text-[15px] font-[600] leading-[22px] justify-between"
                >
                  Semen Collection
                  <BsChevronRight
                    style={{ fontWeight: "900" }}
                    className="font-bold"
                  />
                </Link>
                <hr className="" />
              </div>
            </div>
          </div>
          <div className="w-[65%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Breading;
