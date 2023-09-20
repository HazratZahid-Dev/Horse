import React from "react";
import { Link } from "react-router-dom";
import img from '../Images/horsestable.png'
import contact from '../Images/Contacts.png'
import Schedule from '../Images/Schedule.png'
import combo from '../Images/combo.png'
const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-black  h-screen w-1/6 px-4 py-8">
      {/* <h2 className="text-xl font-bold mb-4">Dashboard</h2> */}
      <ul className="space-y-4">
        <li>
          <Link  to='/dashboard' className="hover:text-[#000032] hover:scale-105 hover:font-semibold flex gap-x-2 items-center text-[16px] font-[500]"><img src={img} className="w-[38px] h-[38px]"/>Horses</Link>
        </li>
        <li>
        <Link to="/contact" className="hover:text-[#000032] hover:scale-105 hover:font-semibold flex gap-x-2 items-center text-[16px] font-[500]"><img src={contact} className="w-[31px] h-[38px]"/>Contact</Link>
        </li>
        <li>
        <Link to='/dashboard/schedule'  className="hover:text-[#000032] hover:scale-105 hover:font-semibold flex gap-x-2 items-center text-[16px] font-[500]"><img src={Schedule} className="w-[34px] h-[38px]"/>Schedule</Link>
        </li>
        <li>
        <Link to="/dashboard/horsereport"  className="hover:text-[#000032] hover:scale-105 hover:font-semibold flex gap-x-2 items-center text-[16px] font-[500]"><img src={combo} className="w-[31px] h-[38px]"/>Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
