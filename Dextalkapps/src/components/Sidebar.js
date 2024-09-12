import React, { useState } from "react";
import User from "../containers/User";
import "./Sidebar.css";
import LeftSidebar from "./LeftSidebar";

const Sidebar = ({ contacts }) => {
  const [isOpen, setIsOpen] = useState(false); // Initially closed for right sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false); // Initially closed for LeftSidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle right sidebar
    setSidebarOpen(true); // Ensure LeftSidebar is open when right sidebar opens
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close right sidebar
    setSidebarOpen(false); // Close LeftSidebar when right sidebar closes
  };

  return (
    <div className={`Sidebar ${isOpen ? "open" : "closed"}`}>
      {/* LeftSidebar on the left side */}
     
      <div className={`left-sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <LeftSidebar contacts={contacts} />
      </div>
      
      {/* Right sidebar content */}
      <div className="right-sidebar">
      

       
      </div>
    </div>
  );
};

export default Sidebar;
