import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-1/5 px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:text-yellow-500">Home</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:text-yellow-500">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics" className="hover:text-yellow-500">Analytics</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-yellow-500">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
