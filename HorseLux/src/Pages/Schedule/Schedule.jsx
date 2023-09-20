import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { scheduleData } from "../../config/Horses";

const Schedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-12 flex justify-between">
        <div className="w-[436px] h-[73px] bg-[#04044D] flex items-center ">
          <DatePicker
            className="bg-[#04044D] outline-none text-white text-[24px] font-[700] px-3"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="space-y-2">
          <div className="w-[430px] p-3  rounded-[15px] bg-[#EDB838]">
            {scheduleData.map((items) => (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-[600]">{items.time}</p>
                  <h4 className="text-[20px] font-[700]">
                    Office Fee: {items.officeFee}
                  </h4>
                </div>
                <div className="flex gap-x-5 items-center">
                  <div>
                    <img
                      src={items.img}
                      className="w-[53px] h-[53px] rounded-full"
                    />
                    <p className="text-[15px] text-center font-[600]">
                      {items.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] font-[700]">
                      Horse:{" "}
                      <span className="text-[14px] font-[500]">
                        {items.name}
                      </span>
                    </p>
                    <p className="text-[16px] font-[700]">
                      Participants (s):{" "}
                      <span className="text-[14px] font-[500]">
                        {items.parti}
                      </span>
                    </p>
                    <p className="text-[16px] font-[700]">
                      Admin :{" "}
                      <span className="text-[14px] font-[500]">
                        {items.admin}
                      </span>
                    </p>
                    <p className="text-[14px] font-[500]">{items.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[430px] p-3  rounded-[15px] bg-[#9747FF]">
            {scheduleData.map((items) => (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-[600]">{items.time}</p>
                  <h4 className="text-[20px] font-[700]">
                    Office Fee: {items.officeFee}
                  </h4>
                </div>
                <div className="flex gap-x-5 items-center">
                  <div>
                    <img
                      src={items.img}
                      className="w-[53px] h-[53px] rounded-full"
                    />
                    <p className="text-[15px] text-center font-[600]">
                      {items.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] font-[700]">
                      Horse:{" "}
                      <span className="text-[14px] font-[500]">
                        {items.name}
                      </span>
                    </p>
                    <p className="text-[16px] font-[700]">
                      Participants (s):{" "}
                      <span className="text-[14px] font-[500]">
                        {items.parti}
                      </span>
                    </p>
                    <p className="text-[16px] font-[700]">
                      Admin :{" "}
                      <span className="text-[14px] font-[500]">
                        {items.admin}
                      </span>
                    </p>
                    <p className="text-[14px] font-[500]">{items.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
