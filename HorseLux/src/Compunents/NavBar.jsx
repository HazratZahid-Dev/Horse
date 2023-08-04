import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import "../Style/NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../Images/logo.png'
const NavBar = () => {
  const [icon, seticon] = useState(false);


  const navigate=useNavigate();
 

  const toHome=()=>{
    navigate('/')

  }
  


  return (
    <div className="cloths-navbar bg-[#000032]   w-full py-2 flex justify-between ">
      <div onclick={toHome} className=" cursor-pointer w-[33.33%]  gap-x-3 flex items-center justify-start  ">
        <img  src={img} className="w-[70px] h-[70px] " />
        <h1 class="text-[25px] font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]  text-transparent bg-clip-text">
  HORSELUX
</h1>

      </div>

      <div className="  w-[43.33%] flex items-center justify-start">
        <ul
          className={icon ? "menu active" : "menu flex   items-center "}
          onclick={() => seticon(!icon)}
        >
        
          <li>
            <Link
              to="/about"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}

            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}

            >
              Sevices
            </Link>
          </li>
          <li>
            <Link
              to="/madi-care"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]"
              onClick={() => seticon(!icon)}

            >
              Medi-Care
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white font-[Josefin Sans]  font-normal text-[20px]  "
              onClick={() => seticon(!icon)}

            >
              Blog
            </Link>
          </li>

        </ul>
      </div>
      <div className="  w-[20.33%] flex gap-x-3 items-center justify-center">
      <Link to='/signin'>
       <button className="text-[20px] flex items-center justify-center font-[Quicksand] text-white border-2 border-[#fff] px-4 py-2 rounded-full" type="button">Sign in</button>

      </Link>
      <Link to='/signup'>
       <button className="text-[20px] flex items-center justify-center font-[Quicksand] text-white border-2 border-[#fff] px-4 py-2 rounded-full" type="button">Sign up</button>

      </Link>

      </div>

      <div className="menu__icon text-white">
        <span className="navbar__icon text-white text-[40px]" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
