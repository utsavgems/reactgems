import React, { useState, useEffect } from 'react';
import "./Createpopup.css";
import grppeople from "../../Images/grppeople.png";

function Createpopup({ toggleCreatePage, toggleCreatePopup }) {
    const closePopup = () => {
        toggleCreatePage(); // Open Createpage
        toggleCreatePopup(); // Close popup
    };

    return (
        <div className="popup userpage">
            <div className="popup-content-userpage">
                {/* <span className="userpage-close-btn" onClick={toggleCreatePopup}>
                    &times;
                </span> */}
                <div className="userpage-title">
                    <img src={grppeople} className="userpage-grpimg" alt="Group" />
                    <h4 className="userpage-popup-head">Wanna Create a new group?</h4>
                </div>
                <p className="userpage-popup-para"> Bring your team/friends together by creating<br /> groups </p>
                <div className="userpage-popup-btn">
                    <button className="userpage-popup-createbtn" onClick={closePopup}>Create new +</button>
                    <p className="userpage-popup-textor">or</p>
                    <button className="userpage-popup-joinbtn">Join a group</button>
                </div>
            </div>
        </div>
    );
}

export default Createpopup;
