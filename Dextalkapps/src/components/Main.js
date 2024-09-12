// src/containers/Main.js
import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../containers/ChatWindow";
import Wallet from "./Wallet"; // Import Wallet component

const Main = ({ user, activeUserId, activePage }) => {
  const renderMainContent = () => {
    if (activePage === "wallet") {
      return <Wallet />;
    } else if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
