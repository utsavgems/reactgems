import React from "react";
import "./Videocall.css";
import videocallimg from "../../Images/videocallimg.png";
import keyimage from "../../Images/keyimage.png";

function Videocall({ toggleCallPage,toggleVcstart }) {
  return (
    <div className="videocall-page">
      <div className="videocall-header">
        <div className="header-dextalk-text">
          <h3 className="left-dextalk-title">Dextalk</h3>
          <button className="header-vc-backbtn" onClick={toggleCallPage}>
            Back
          </button>
        </div>
      </div>

      <div className="videocall section">
        <div className="videocall-picture">
          <img src={videocallimg} className="videcall-camera-img" />
        </div>

        <div className="videocall section2">
          <div className="videocall-permission-key">
            <img src={keyimage} className="videocall-keyimage" />
            <p className="videocall-keytext">
              Allow this permissions if restricted for <br /> better experince
            </p>
          </div>
          <div className="videocall-button-group">
            <div className="videocall-allowmicrophone-text">
              <button className="videocall-allowmicrophone">
                {" "}
                Allow microphone access
              </button>
            </div>
            <div className="videocall-allowcamera-text">
              <button className="videocall-allowcamera">
                {" "}
                Allow Camera access
              </button>
            </div>
            <div className="videocall-startcall-text">
              <button className="videocall-startcall"  onClick={toggleVcstart}> Start Call</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videocall;
