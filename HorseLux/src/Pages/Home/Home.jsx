import React from "react";
import "../../Style/Home.css";
import Services from "../Services";

const Home = () => {
  return (
    <div>
      <div className="bg-image w-full h-[100vh] bg-cover bg-center p-20">
        <div className="bg-white bg-opacity-75  rounded-xl w-[w-60] m-auto lg:m-0 lg:w-[50%] py-4 px-5">
          <h1 className="font-[Josefin Sans] leading-[100px] font-[400] text-[#000032] text-[44px] lg:text-[96px]">
            A pet-first <span className="text-[#FBBC05] ">approach to </span>{" "}
            <br /> wellness
          </h1>
          <button
            type="button"
            className="text-white bg-[#000032] px-5 py-3 text-[20px] font-[500] mt-5 rounded-full "
          >
            Learm More
          </button>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
