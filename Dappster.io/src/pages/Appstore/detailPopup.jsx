import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import leftarrow from "/images/Appstore/leftarrow.png"
import "./detailpopup.css";

const DetailPopup = ({
  title,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  image,
  Description,
  Thumbnail,
  appdetails,
  onClose,
}) => {
  return (
    <div className="appstore-detail-popup">
      <div className="appstore-apps-details">
        <div className="appstore-details-close" onClick={onClose}>
          <img className="appstore-details-leftarrow" src={leftarrow}/>
        </div>
        <div className="appdetails-section1">
          <div className="appdetails-applogo">
            <img className="appdetails-logo" src={image} />
          </div>
          <div className="appdetails-text-sec1">
            <h4 className="appdetails-logo-title">{title}</h4>
            <p className="appdetails-team-text">{text}</p>
            <p className="appdetails-3rdrow">{text1}</p>
            <p className="appdetails-3rdrow">{text2}</p>
          </div>
        </div>

        <div className="detailspage-verticalline">
          <hr className="details-popup-line" />
        </div>

        <div className="detailspage-imgnumber">
          <p>{appdetails}</p>
        </div>

        <div className="detailspage-verticalline">
          <hr className="details-popup-line" />
        </div>

        <div className="detailpage-buttons">
          <button className="detailpage-install-buttons">install</button>
          <button className="detailpage-Custom-buttons">Custom</button>
        </div>

        <div className="detailspage-verticalline">
          <hr className="details-popup-line" />
        </div>

        <div className="detailpage-images">
          <img src={Thumbnail} alt="image" />
        </div>

        <div className="detailspage-verticalline">
          <hr className="details-popup-line" />
        </div>

        <div className="detailpage-description">
          <p className="detailpage-description-text">Description</p>
          <p className="detailpage-description-para">
         {Description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DetailPopup;
