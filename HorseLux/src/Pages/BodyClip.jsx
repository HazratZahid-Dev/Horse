import React, { useState } from 'react'
import Sidebar from '../Compunents/Sidebar'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const BodyClip = () => {
  const [selectedSex, setSelectedSex] = useState("");
  const [anchorSex, setAnchorSex] = useState(null);
  const handleSex = (event) => {
    setAnchorSex(event.currentTarget);
  };
  const handleCloseSex = () => {
    setAnchorSex(null);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='p-4'>
    <input   aria-describedby={id} variant="contained" onClick={handleClick} placeholder='select  type' className='border py-1 outline-none px-2  rounded-lg bg-slate-100'></input>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='w-full px-4'>
          <p >Qari</p>
          <p>Qari</p>
          <p>Qari</p>
          <p>Qari</p>
          <p>Qari</p>
          <p>Qari</p>
          <p>Qari</p>
          <p>Qari</p>

        </div>
      </Popover>

    </div>

        
    </div>
  )
}

export default BodyClip