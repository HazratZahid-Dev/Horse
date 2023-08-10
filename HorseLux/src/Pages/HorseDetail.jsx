import React, { useState } from "react";
import Sidebar from "../Compunents/Sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { activityData, cardData, horseData } from "../config/HorseDetail";

const HorseDetail = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabStyles = {
    backgroundColor: "transparent",
    color: "black",
    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };

  const activeTabStyles = {
    backgroundColor: "black",
    color: "white",

    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
  };
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex justify-center w-full">
          <div className=" w-[70%]  ">
            <div>
              <Tabs>
                <div className="w-[80%] m-auto">
                  <TabList className="flex justify-between mt-3">
                    <Tab
                      className="outline-none w-32 text-center text-[17px] font-[600] rounded-[14px]"
                      style={activeTab === 0 ? activeTabStyles : tabStyles}
                      onClick={() => setActiveTab(0)}
                    >
                      Activity
                    </Tab>
                    <Tab
                      className="outline-none w-32 text-center text-[17px] font-[600]  rounded-[14px]"
                      style={activeTab === 1 ? activeTabStyles : tabStyles}
                      onClick={() => setActiveTab(1)}
                    >
                      Reminder
                    </Tab>
                    <Tab
                      className="outline-none w-32 text-center text-[17px] font-[600] rounded-[14px]"
                      style={activeTab === 2 ? activeTabStyles : tabStyles}
                      onClick={() => setActiveTab(2)}
                    >
                      Detail
                    </Tab>
                  </TabList>
                </div>

                <div className=" border rounded-3xl shadow-md mt-8 ">
                  <TabPanel>
                    {horseData.map((items) => (
                      <div className="w-full  mt-3 m-auto flex flex-col justify-center">
                        <div className="flex justify-center">
                          <div className="flex flex-col  w-56">
                            <p className="font-semibold flex gap-x-1 text-[20px]  items-center">Owner:<span className="text-[400] mt-[2px] text-base font-normal text-[#636363]">{items.owner}</span> </p>
                            <p className="font-semibold flex gap-x-1 text-[20px]  items-center">Microchip:<span className="text-[400] mt-[2px] text-base font-normal text-[#636363]">{items.black}</span> </p>
                          </div>
                          <div className="flex flex-col  w-56">
                            <p  className="font-semibold flex gap-x-1 text-[20px]  items-center">Black: <span className="text-[400] mt-[2px] text-base font-normal text-[#636363]">{items.billpayer}</span></p>
                            <p  className="font-semibold flex gap-x-1 text-[20px] items-center">Microchip: <span className="text-[400] mt-[2px] text-base font-normal text-[#636363]">{items.microchip}</span></p>
                          </div>
                        </div>
                        <div className="space-y-3 py-4">
                          {cardData.map((items) => (
                            <div>
                              <div className=" w-1/2 m-auto">

                              {
                                items.date &&
                                <p className=" py-2 text-[17px] font-[600] font-[]">
                                  {items.date}
                                </p>
                              }
                               
                                <div className=" m-auto  flex gap-x-2 py-2 items-center justify-between w-96 ">
                                  <div className="flex gap-x-2 items-center w-full ">
                                    <img src={items.img} className="h-[50px] w-[50px]"/>
                                    <div>
                                      <p className="text-[16px] font-[600]">
                                        {items.heading}
                                      </p>
                                      <p className="text-[#636363] text-[500] text-[14px]">{items.cat}</p>
                                    </div>
                                   
                                    
                                  </div>
                                  <div>
                                      <button className="w-[20px] h-[20px] flex items-center justify-center text-2xl">{items.arr}</button>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] mt-2 bg-[#CACACA]"></div>

                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content </h2>
                  </TabPanel>
                  <TabPanel>
                    <div className="p-4">
                              <h2 className="text-[17px] font-[700]">Information</h2>
                              {
                                activityData.map((items)=>(
                                    <div>
                                        <div className="space-y-1 mt-3">
                                        <p className="text-[14px]  font-[700]">Born Name: <span className="text-[#9F9F9F] font-[600]">{items.bornName}</span></p>
                                        <p className="text-[14px]  font-[700]">Born Name: <span className="text-[#9F9F9F]  font-[600]">{items.ShowName}</span></p>
                                        <p className="text-[14px]  font-[700]">Born Name: <span className="text-[#9F9F9F] font-[600]">{items.PaddockName}</span></p>
                                        <p className="text-[14px]  font-[700]">Born Name: <span className="text-[#9F9F9F] font-[600]">{items.PaddockLocation}</span></p>
                                        <p className="text-[14px]  font-[700]">Born Name: <span className="text-[#9F9F9F] font-[600]">{items.PaddockNotes}</span></p>

                                        </div>
                                        <hr className="w-[43%] mt-3 "/>
                                        <h2 className="text-[17px] font-[700] mt-4">Stall Information</h2>
                                        <p className="text-[14px] mt-2 font-[700]">Stall #: <span className="text-[#9F9F9F] font-[600]">{items.sno}</span></p>
                                        <hr className="w-[43%] mt-3 "/>
                                        <h2 className="text-[17px] space-y-2 font-[700] mt-4">Important Dates</h2>
                                       <div className="space-y-1 mt-3">
                                       <p className="text-[14px]  font-[700]">Cogging Renewal Dates: <span className="text-[#9F9F9F] font-[600]">{items.Renewal}</span></p>
                                        <p className="text-[14px]  font-[700]">Last Cogging Dates: <span className="text-[#9F9F9F] font-[600]">{items.Renewal}</span></p>
                                        <p className="text-[14px]  font-[700]">Cogging Renewal Dates: <span className="text-[#9F9F9F] font-[600]">{items.Renewal}</span></p>
                                        <p className="text-[14px]  font-[700]">Cogging Renewal Dates: <span className="text-[#9F9F9F] font-[600]">{items.Renewal}</span></p>
                                       </div>
                                        <hr className="w-[43%] mt-3 "/>
                                        <h2 className="text-[17px] font-[700] mt-4">Feed</h2>
                                        <h2 className="text-[15px] font-[700] mt-2">AM Schedule</h2>
                                        <p className="text-[12px]  font-[700]">Alfalfa cubes: <span className="text-[#9F9F9F] font-[600]">{items.cubes}</span></p>
                                        <p className="text-[12px]  font-[700]">{items.Smartpak}</p>

                                        <h2 className="text-[15px] font-[700] mt-2">Lunch Schedule</h2>
                                        <p className="text-[12px]  font-[700]">{items.Smartpak}</p>










                                    </div>
                                ))
                              }
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorseDetail;
