import React from "react";
import "./Empty.css";

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[10];
  
  return (
    <div className="Empty">
      <h1 className="Empty__name">Dextalk</h1>
      {/* <h1 className="Empty__name">Welcome, {first_name} </h1> */}
      {/* <img src={profile_pic} alt={name} className="Empty__img" /> */}
      <p className="Empty__status">
        {/* <b>Status:</b> {status} */}
        You can use Dextalk on other devices such as desktop, tablet and mobile phone
      </p>
      <div className="Empty_btn_firstgroup">
      <button className="Empty__btn">Create a new group</button>
      <button className="Empty__btn">Add a new friend</button>
      <button className="Empty__btn">intiate a transaction</button>
      </div>

      <div className="Empty_btn_secondgroup">
      <button className="Empty__btn">Make a voice call</button>
      <button className="Empty__btn">Make a video call</button>
      </div>

      <p className="Empty__info">
      Your address 
      </p>

      <div className="Empty_share_btn">
      <span className="btn_number"> Csdsdaasdsuirn3nnii3m4n3434</span>
      <button className="share_btn_middle">Share</button>
      </div>
    </div>
  );
};
export default Empty;