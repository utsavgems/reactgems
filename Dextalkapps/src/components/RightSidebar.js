import React, { useState } from "react";
import "./RightSidebar.css";

const RightSidebar = ({ contacts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`RightSidebar ${isOpen ? "open" : "closed"}`}>
      <button className="close_open_btn" onClick={toggleRightSidebar}>
        {isOpen ? (
          <div className="closed-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg closeicon_design"
              viewBox="0 0 16 16"
            >
              <path d="M2.354 2.354a.5.5 0 0 0 0 .707l5.293 5.293-5.293 5.293a.5.5 0 1 0 .707.707l5.293-5.293 5.293 5.293a.5.5 0 0 0 .707-.707l-5.293-5.293 5.293-5.293a.5.5 0 0 0-.707-.707L8 7.646 2.707 2.354a.5.5 0 0 0-.707 0z"/>
            </svg>
          </div>
        ) : (
          <div className="open-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left opencions_design"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 0-.708 0l-7 7a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708L4.707 8l6.647-6.646a.5.5 0 0 0 0-.708z"/>
            </svg>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="rightsidebar_content">
          {/* Add your right sidebar content here */}
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
