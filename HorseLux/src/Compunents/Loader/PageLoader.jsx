import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="hourglassBackground">
        <div class="hourglassContainer">
          <div class="hourglassCurves"></div>
          <div class="hourglassCapTop"></div>
          <div class="hourglassGlassTop"></div>
          <div class="hourglassSand"></div>
          <div class="hourglassSandStream"></div>
          <div class="hourglassCapBottom"></div>
          <div class="hourglassGlass"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
