import React, { useState } from "react";
import "./Vcstart.css";
import Settingicon from "../../Images/settingwhticn.png";
import Callicon from "../../Images/callwhticn.png";
import audioicon from "../../Images/audiowhticn.png";
import Vcicon from "../../Images/vcwhticon.png";
import Emojiicon from "../../Images/emojiwhticn.png";
import Bluevideo from "../../Images/bluevideo.png";
import Vcstartimg from "../../Images/Vcstartimg.png";
import Vcstartimg2 from "../../Images/Vcstartimg2.png";
import Popup from "../../containers/Popup";

function Vcstart({ toggleVcstart, toggleVideoCall, toggleSlide, showSlide }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleDisplay = () => {
    setShowText(!showText);
  };

  return (
    <div className="Vcstart-page">
      <div className="Vcstart-header">
        <div className="header-Vcpage-text">
          <h3 className="left-Vcpage-title">Dextalk</h3>

          <div className="header-Vcstart-btn">
            <button className="header-vcpage-addpeople" onClick={togglePopup}>
              Add People
            </button>
            <button className="header-vcpage-backbtn" onClick={toggleVideoCall}>
              <img src={Callicon} className="vcstart-endcall-btn" /> End call
            </button>
          </div>
        </div>
      </div>

      <div className="vcstart-section-2">
        {showSlide ? (
          <div className="vcstart-show-2slides">
          <div className="vcstart-Add-2slid-vc">
            <div className="vcstart-vc-slide1">
              <img src={Vcstartimg} className="Vcstartimg-slide-img-1" />
              <p className="Vcstartimg-slide1-text1">Arun Singh</p>
            </div>
            <div className="vcstart-vc-slide2">
              <img src={Vcstartimg2} className="Vcstartimg-slide-img-2" />
              <p className="Vcstartimg-slide1-text2">Raviraj</p>
            </div>
          </div>
          </div>
        ) : (
          <div className="vcstart-display">
            {showText ? (
              <div className="vcstart-face-hide-section">
                <h3 className="vcstart-face-text-A">A</h3>
              </div>
            ) : (
              <img src={Vcstartimg} className="vcstart-display-img" />
            )}
            <p className="vcstart-username-text">Arun Singh</p>
          </div>
        )}

        <div className="vcstart-option-icons">
          <img src={audioicon} className="vcstart-iocn audioicon" />
          {showText ? (
            <img
              src={Bluevideo}
              onClick={toggleDisplay}
              className="vcstart-iocn Bluevideoicn"
            />
          ) : (
            <img
              src={Vcicon}
              onClick={toggleDisplay}
              className="vcstart-iocn videoicon"
            />
          )}
          <img src={Emojiicon} className="vcstart-iocn Emojiicon" />
          <img src={Settingicon} className="vcstart-iocn Settingicon" />
        </div>
      </div>

      {isPopupOpen && <Popup onClose={togglePopup} toggleSlide={toggleSlide} />}
    </div>
  );
}

export default Vcstart;
