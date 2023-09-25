import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import "../Style/NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../Images/logo.png";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
// side bar
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { drawyer } from "../config/Horses";
import { MdLogout } from "react-icons/md";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Logout from "./Logout";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 657,
  height:371,
  borderRadius:10,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NavBar = () => {
  const [icon, seticon] = useState(false);

  // ************Modal********
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  const User = useSelector((state) => state.auth);
  // Drawyer
    const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
// ******************
const list = (anchor) => (
 <div className="mt-5">

<Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {drawyer.map((text, index) => (
        <ListItem key={text} disablePadding>
          <Link to={text.link} className="flex  w-full hover:bg-[#000032] hover:text-white  px-4 py-2 items-center gap-x-4">
              <p className="text-[20px]">{text.icons}</p>
            <p className="text-[20px] font-[600]">{text.text}</p>
            <Divider />
          </Link>
        </ListItem>
      ))}
      <div  onClick={handleOpen} className="flex  w-full hover:bg-[#000032] hover:text-white  px-4 py-2 items-center gap-x-4">
              <p className="text-[20px]"><MdLogout/></p>
            <p className="text-[20px] font-[600]">Logout</p>
            <Divider />
          </div>
    </List>
    
  </Box>
 </div>
);

  return (
    <div className="cloths-navbar bg-[#000032]   w-full py-2 flex justify-between ">
     {
      User.auth && <div className="pl-3 pr-5">
       
        {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>  <GiHamburgerMenu className="text-[#AE8625] text-[30px]" /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </div>
     }
     <div>
    
    </div>
      <Link
        // onclick={toHome}
        to="/"
        className=" cursor-pointer w-[33.33%]  gap-x-3 flex items-center justify-start  "
      >
        <img src={img} className="w-[70px] h-[70px] " />
        <h1 class="text-[25px] font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]  text-transparent bg-clip-text">
          HORSELUX
        </h1>
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
   
      >
        <Box sx={style}>
         <Logout/>
        </Box>
      </Modal>

      {!User.auth ? (
        <>
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
            <Link to="/signin">
              <button
                className="text-[20px] flex items-center justify-center hover:bg-gradient-to-r from-[#AE8625] via-[#615f36] to-[#D2AC47] hover:scale-105  font-[Quicksand] text-white border-2 border-[#fff] px-4 py-2 rounded-full"
                type="button"
              >
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="text-[20px] hover:bg-gradient-to-r from-[#AE8625] via-[#615f36] to-[#D2AC47] hover:scale-105  flex items-center justify-center font-[Quicksand] text-white border-2 border-[#fff] px-4 py-2 rounded-full"
                type="button"
              >
                Sign up
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className=" flex w-full justify-end">
          <div className="w-[360px] bg-white  px-3 flex items-center justify-between h-[45px] rounded-full">
            <input className="w-full outline-none" type="text"></input>
            <BsSearch />
          </div>
        </div>
      )}

      <div className="menu__icon text-white">
        <span
          className="navbar__icon text-white text-[40px]"
          onClick={() => seticon(!icon)}
        >
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
