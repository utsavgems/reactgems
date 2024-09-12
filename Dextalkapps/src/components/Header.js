import React, {useState} from "react";
import "./Header.css";
import Personimg from "../Images/personicon.png";
import Walletimg from "../Images/iconswallet.png";
import videoicons from "../Images/videoicons.png"
import settingsicon from "../Images/settingsicon.png";
import isymbols from "../Images/isymbols.png";
import bluepicture from "../Images/bluepicture.png";
import faceimg from "../Images/faceimg.png";
import blockimg from "../Images/blockimg.png";
import baselineimgedit from "../Images/baselineimgedit.png";
import closeicon from "../Images/closeicon.png";

function Header({ user }) {
  const { name, status } = user;
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handlePersonClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleCloseClick = () => {
    setIsPanelOpen(false);
  };
  return (
    <header className="Header">
      <div className="header_containt">

        <div className="header_section">
          <div className="header_person" onClick={handlePersonClick}>
            <img className="person-icon" src={Personimg} width={30} height={30} alt="Person Icon"/>
          </div>

          <div className="header_text">
            <h4 className="Header__name">Dev -Ana Ho</h4>
             <div className="online_statu">
              <div className="header-green-dots"></div>
              <p className="Header__status">Online</p>
             </div>
          </div>
        </div>

        <div className="iconsgroup">
          <img className="walleticons" src={Walletimg} width={30} height={30} />
        <div class="vertical-line-header"></div>

        <img src={videoicons}  width={30} height={30}  className="camera_icons"/>
        <div class="vertical-line-header"></div>

          <img src={settingsicon}  width={30} height={30} className="verticals_icons"/>
        </div>
        
      </div>

       {/* Right-side slide-out panel */}
       <div className={`right-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="rightside-three-close-button" onClick={handleCloseClick}>
          <img src={closeicon} className="rightside-three-closeicn" alt="Close Icon" />
        </button>
        <div className="rightside-three-siedbar">
          <div className="rightside-three-section1">
            <img src={bluepicture} className="rightside-three-topimg" alt="Blue Picture" />
            <img src={faceimg} className="rightside-three-img2" alt="Face Image" />
            <p className="rightside-three-nametxt">Name</p>

            <div className="rightside-three-user-details">
              <p className="rightside-three-user-name">Dev - Ana Ho</p>
              <img src={baselineimgedit} className="rightside-three-line-img"/>
            </div>
            <hr className="rightside-three-hrline"/>
          </div>


        </div>
      </div>
    </header>
  );
}

export default Header;
