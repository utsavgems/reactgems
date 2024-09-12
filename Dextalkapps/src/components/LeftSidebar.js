import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import User, { Personimg } from "../containers/User";
import Wallet from './Wallet';
import "./LeftSidebar.css";
import splashimg from "../Images/coloresplash.png";
import bodytypeicons from "../Images/whitebody.png";
import compassicon from "../Images/compassicon.png";
import frequencyicon from "../Images/frequencyicon.png";
import audioicons from "../Images/audioicons.png";
import micicons from "../Images/micicons.png";
import callcuticon from "../Images/callcuticon.png";
import Profileimg from "../Images/Profileimg.png";
import dollaricons from "../Images/dollaricons.png";
import messageicons from "../Images/messageicons.png";
import pluseicons from "../Images/pluseicons.png";
import callicons from "../Images/callicons.png";
import settingicons from "../Images/settingicons.png";
import Friendsfill from "../Images/friendsfill.png";

const LeftSidebar = ({ contacts, toggleWallet, toggleCallPage, toggleCreatePopup }) => {
  const [chatWindowOpen, setChatWindowOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('sidebarOpen');
    return savedState !== null ? JSON.parse(savedState) : true; // Default to open
  });
  const [showLine, setShowLine] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleMessageIconClick = () => {
    setChatWindowOpen(false); // Close the chat window
    setRightSidebarOpen(false); // Close the right sidebar
    navigate("/"); // Navigate to the default page
  };
  
  // Effect to save sidebar state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // Effect to close the sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleDollarClick = () => {
    toggleWallet();
    setShowLine(!showLine);
    setSidebarOpen(false);
    navigate("/Wallet");
  };

  const handleCallpageClick = () => {
    toggleCallPage();
    setSidebarOpen(false);
    navigate("");
  };

  const handleAddNewClick = () => {
    setRightSidebarOpen(prevState => !prevState); // Toggle the state
  };

  return (
    <div className="container_leftslider">
      <Sidebar
        toggleSidebar={toggleSidebar}
        handleDollarClick={handleDollarClick}
        handleCallpageClick={handleCallpageClick}
        toggleCreatePopup={toggleCreatePopup} // Pass the function here
        isOpen={sidebarOpen}
      />
      {sidebarOpen && (
        <div className="content_leftsidebar">
          <aside className="aside_section">
            <form className="searach-section" action="action_page.php">
              <input
                className="search_input"
                type="text"
                placeholder="Search"
                name="search"
              />
              <button className="button-style" type="submit">
                <img src={compassicon} className="compass-icons" />
              </button>
            </form>
            <div className="sidebar_sec2">
              <div className="personbody_icon">
                <img
                  src={bodytypeicons}
                  color="white"
                  className="bodytypeicons"
                />
                <p className="sec-2 friendtext white_text"> Friends</p>
              </div>
              <p className="addnew_btn white_text" onClick={handleAddNewClick}> Add New +</p>
            </div>
            {contacts.map((contact) => (
              <User user={contact} key={contact.user_id} isOpen={sidebarOpen} />
            ))}

            <div className="sidebar-bottomside">
              <div className="sidebar-calling-section">
                <div className="user-calling-dp">A</div>
                <div className="text-section-bottom">
                  <div className="user-text-section">
                    <div className="user-calling-name">Dev- Ana ho</div>
                    <div className="calling-voice-frequency">
                      <img src={frequencyicon} className="frequencyicon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="sldierbottom_icons_group">
                <img src={audioicons} className="audioicons icons-space" />
                <img src={micicons} className="micicons icons-space" />
                <img src={callcuticon} className="callcuticon icons-space" />
              </div>
            </div>
          </aside>
        </div>
      )}
      {rightSidebarOpen && (
        <div className="content_rightsidebar">
          <SidebarRight toggleSidebar={() => setRightSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ toggleSidebar, handleDollarClick, handleCallpageClick, toggleCreatePopup, isOpen, handleMessageIconClick }) => {
  return (
    <div className="sidebar">
      <div className="profile_image">
        <img src={Profileimg} alt="Profile" />
      </div>
      <button className="close_open_btn" onClick={toggleSidebar}>
        {isOpen ? (
          <div className="closed-btn"></div>
        ) : (
          <div className="open-btn"></div>
        )}
        <div className="messages-icons" onClick={handleMessageIconClick}>
          <img src={messageicons} className="sidebar-messageicons" alt="Messages" />
        </div>
      </button>

      <div className="telephonic_icons" onClick={handleCallpageClick}>
        <img src={callicons} className="sidebar-callicons" alt="Calls" />
      </div>

      <div className="doller_sign_icons">
        <Link to="" className="link-style" onClick={handleDollarClick}>
          <img src={dollaricons} className="sidebar-dollericon" alt="Dollar" />
        </Link>
      </div>

      <div className="horizontal-lines">
        <hr />
      </div>

      <div className="pluse_icons" onClick={toggleCreatePopup}>
        <img src={pluseicons} className="sidebar-pluseicons" alt="Plus" />
      </div>

      <div className="theme_squer_icon">
        <img
          src={splashimg}
          width={50}
          height={50}
          className="theme_icon"
          alt="Theme Icon"
        />
      </div>

      <div className="setting-icon">
        <img
          src={settingicons}
          width={35}
          height={35}
          className="setting_icon"
          alt="Settings"
        />
      </div>
    </div>
  );
};


const SidebarRight = ({ toggleSidebar }) => {
  return (
    <div className="sidebarright">
<div className="sidebarright-section1">
<form className="sidebarright-searach-section">
              <input
                className="sidebarright-search_input"
                type="text"
                placeholder="Search by wallet address"
                name="search"
              />
            </form>
</div>
<div className="sidebarright-section2">
<div className="sidebarright-user-details">
<img src={Personimg} className="sidebarright-person-img"/>
<p className="sidebarright-user-name">Arun Singh</p>
</div>
<img src={Friendsfill} className="sidebarright-friendsfill"/>
</div>

      {/* <button className="sidebar-close" onClick={toggleSidebar}>
        Close
      </button>
      <p>Second Sidebar Content</p> */}
    </div>
  );
};

export default LeftSidebar;
