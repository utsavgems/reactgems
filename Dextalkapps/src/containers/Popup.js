import React, { useState } from "react";
import "./Popup.css";
import { Personimg } from "./User";
import Groupiocn from "../Images/grppeople.png";
import Sendingicon from "../Images/sendingicon.png";
import Copyiocns from "../Images/copyicon.png";

function Popup({ onClose,toggleSlide }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddPeople = () => {
    // Add your logic to handle adding people here
    console.log("Email:", email);
    onClose();
  };

  const handleAddClick = () => {
    toggleSlide();
    onClose();
  };


  return (
    <div className="vcstart-popup">
      <div className="vcstart-popup-content">
        {/* <button onClick={onClose} className="popup-close-btn">Close</button> */}

        <div className="vcstart-popup-heading">
          <div className="vcstart-popup-text">
            <img src={Groupiocn} className="vcstart-popup-grpimg" />
            <p className="vcstart-popup-title">
              Add your friends or send a link
            </p>
          </div>
          <p className="vcstart-popup-para">Send meeting invitation via mail</p>
        </div>

        <div className="vcstart-popup-email">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email address"
            className="vcstart-popup-email-input"
          />
          <button className="vcstart-popup-sendicon" onChange={handleAddPeople}>
            {" "}
            <img src={Sendingicon} />
          </button>
        </div>

        <div className="vcstart-popup-id">
          <p className="vcstart-popup-userid">https://dextalk/sdiuw@9312jdsds</p>
          <button className="vcstart-popup-copybtn" >
            <img src={Copyiocns} className="vcstart-popup-copyicn"/>
          </button>
        </div>


<div className="vcstart-popup-sec-2">
    <div className="vcstart-popup-title2">
        <p className="vcstart-popup-frdtext"> Friends</p>
    </div>

    <div className="vcstart-popup-userdetails">
    <div className="vcstart-popup-detail">
    <img src={Personimg} className="User__pic" />
    <p className="vcstart-popup-username">Dev-Ana Ho</p>
    </div>
        <div className="vcstart-popup-addbtn">
          <p className="vcstart-popup-addbtn"  onClick={handleAddClick}>Add</p>
        </div>
    </div>

    <div className="vcstart-popup-userdetails2">
    <div className="vcstart-popup-detail">
    <img className="vcstart-popup-user-pic" />
    <p className="vcstart-popup-user-text2"></p>
    </div>
        <div className="vcstart-popup-addbtn">
          <p className="vcstart-popup-addbtn" >Add</p>
        </div>
    </div>
   
    <div className="vcstart-popup-userdetails2">
    <div className="vcstart-popup-detail">
    <img className="vcstart-popup-user-pic" />
    <p className="vcstart-popup-user-text2"></p>
    </div>
        <div className="vcstart-popup-addbtn">
          <p className="vcstart-popup-addbtn" >Add</p>
        </div>
    </div>


</div>
      </div>
    </div>
  );
}

export default Popup;
