import React, { useState } from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../actions";
import Personimg from "../Images/personicon.png";
import callingicon from "../Images/callingicon.png";
import Createpopup from "../components/Grouppage/Createpopup";

const User = ({ user, isOpen }) => {
  const { name } = user;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleUserClick(user_id) {
    console.log(user_id);
    store.dispatch(setActiveUserId(user_id));
  }

  function handleImageClick(e) {
    e.stopPropagation(); // Prevent click event from propagating to parent div
    setIsPopupOpen((prevState) => !prevState);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="User user-bg" onClick={() => handleUserClick(user.user_id)}>
      <div className="green-dots"></div>
      <img
        src={Personimg}
        alt={name}
        className="User__pic"
        onClick={handleImageClick}
      />
      <div className="User__details">
        {isOpen && (
          <React.Fragment>
            <p className="User__details-name">Dev -Ana Ho</p>
            <p className="User__details-status">Yes Bro</p>
          </React.Fragment>
        )}
      </div>

      <div className="calling-icon">
        <img src={callingicon} className="User_call" />
      </div>

      {/* {isPopupOpen && (
        <div
          className="popup-container"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing the popup
        >
          <Createpopup toggleCreatePage={closePopup} />
        </div>
      )} */}
    </div>
  );
};

export { Personimg };
export default User;
