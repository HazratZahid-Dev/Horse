// import React, { useState } from "react";
// import Sidebar from "../../Compunents/Sidebar";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import Bronze from "./Compunents/Bronze";
// import Silver from "./Compunents/Silver";
// import Gold from "./Compunents/Gold";

// const Subscription = () => {
//     const [activeTab, setActiveTab] = useState('');

//     const handleTabClick = (index) => {
//       setActiveTab(index);
//     };
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-full flex items-center justify-center">
//         <div className="w-[70%]  opacity-70 rounded-[50px]  bg-black text-white ">
//           <div className="bg-gradient-to-r from-[#a37d23] via-[#d2c736] to-[#ad8c31]  rounded-tl-[50px] rounded-tr-[50px]">
//             <h2 className="text-[18px]  font-[700] py-2 text-center">
//               About Us
//             </h2>
//             <hr className="w-[40%] m-auto " />
//             <h2 className="text-[28px] font-[700]  text-center">BRONZE</h2>
//             <h3 className="text-[18px] font-[700] py-2 text-center">
//               UP TO 25 HORSES
//             </h3>
//           </div>
//           <Tabs>
//     <TabList className='flex justify-center py-2 items-center gap-x-12'>
//       <Tab className='w-[130px] h-[38px] bg-[#BBBBBB] cursor-pointer flex justify-center items-center text-center uppercase  rounded-full outline-none'>BROZE</Tab>
//       <Tab className='w-[130px] h-[38px] bg-[#BBBBBB] cursor-pointer flex justify-center items-center text-center uppercase  rounded-full outline-none'>Silver</Tab>
//       <Tab className='w-[130px] h-[38px] bg-[#BBBBBB] cursor-pointer flex justify-center items-center text-center  uppercase  rounded-full outline-none'>Gold</Tab>

//     </TabList>

//     <TabPanel className='flex items-center  justify-center'>
//      <Bronze/>
//     </TabPanel>
//     <TabPanel className='flex items-center  justify-center'>
//     <Silver/>
//     </TabPanel>
//     <TabPanel className='flex items-center  justify-center'>
//     <Gold/>
//     </TabPanel>
//   </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;

import React, { useState } from "react";
import Sidebar from "../../Compunents/Sidebar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Bronze from "./Compunents/Bronze";
import Silver from "./Compunents/Silver";
import Gold from "./Compunents/Gold";

const Subscription = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabHeadings = ["BRONZE", "SILVER", "GOLD"];
  const tabBackgroundColors = [
    "from-[#a65f18] via-[#ca8a49] to-[#a65f18]",
    "from-[#c9c8ce] via-[#ccccccb1] to-[#c9c8ce]",
    "from-[#AE8625] via-[#cfc973] to-[#AE8625]",
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex items-center justify-center">
        <div className="w-[70%]  opacity-70 rounded-[50px]  bg-black text-white ">
          <div  className={` rounded-tl-[50px] rounded-tr-[50px] bg-gradient-to-r ${tabBackgroundColors[activeTab]} text-white`}>
            <h2 className="text-[18px]  font-[700] py-2 text-center">
            Subscription
            </h2>
            <hr className="w-[40%] m-auto " />
            <h2 className="text-[28px] font-[700]  text-center">   {tabHeadings[activeTab]}</h2>
            <h3 className="text-[18px] font-[700] py-2 text-center">
              UP TO 25 HORSES
            </h3>
          </div>
          <Tabs>
            <TabList className="flex justify-center py-2 items-center gap-x-12">
              <Tab
                className={`w-[130px] h-[38px] cursor-pointer flex justify-center items-center text-center uppercase rounded-full outline-none ${
                  activeTab === 0 ? "bg-gradient-to-r from-[#a65f18]  via-[#ca8a49] to-[#a65f18]" : "bg-[#BBBBBB]"
                }`}
                onClick={() => handleTabClick(0)}
              >
                BRONZE
              </Tab>
              <Tab
                className={`w-[130px] h-[38px] cursor-pointer flex justify-center items-center text-center uppercase rounded-full outline-none ${
                  activeTab === 1 ? "bg-gradient-to-r from-[#c9c8ce]  via-[#ccccccb1] to-[#c9c8ce]" : "bg-[#BBBBBB]"
                }`}
                onClick={() => handleTabClick(1)}
              >
                Silver
              </Tab>
              <Tab
                className={`w-[130px] h-[38px] cursor-pointer flex justify-center items-center text-center uppercase rounded-full outline-none ${
                  activeTab === 2 ? "bg-gradient-to-r from-[#AE8625]  via-[#cfc973] to-[#AE8625]" : "bg-[#BBBBBB]"
                }`}
                onClick={() => handleTabClick(2)}
              >
                Gold
              </Tab>
            </TabList>

            <TabPanel className="flex items-center  justify-center">
              <Bronze />
            </TabPanel>
            <TabPanel className="flex items-center  justify-center">
              <Silver />
            </TabPanel>
            <TabPanel className="flex items-center  justify-center">
              <Gold />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

