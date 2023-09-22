import React from "react";

import "../Style/Home.css";
import Sidebar from "../Compunents/Sidebar";
const AboutUs = () => {
  return (
    <div className=" w-full  flex ">
      <Sidebar />
      <div className="bg-signIn w-full flex items-center justify-center   bg-cover bg-center bg-no-repeat">
        <div className="w-[70%] px-12  opacity-70 rounded-[50px]  bg-black text-white h-[80%]">
          <h2 className="text-[28px] font-[700] py-2 text-center">About Us</h2>
          <hr />
          <div>
            <p className="text-[18px] font-[700] text-justify px-12 py-8">
              Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do
              eiusmod temp or incididunt ut labore et dolore mag na aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequ at. Duis aute irure dolor in
              reprehend erit in voluptate velit esse cillum dol ore eu fugiat
              nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labo re et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitat ion ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute iru re dolor in
              reprehenderit in voluptate velit esse cillum dol ore eu fugiat n
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
