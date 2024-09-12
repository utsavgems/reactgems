import React, { Component } from "react";
import Sidebar from "../components/Sidebar.js";
import Main from "../components/Main.js";
import "./App.css";
import store from "../store";
import _ from "lodash";
import LeftSidebar from "../components/LeftSidebar.js";
import Wallet from "../components/Wallet.js";
import CallPage from "../components/Pages/Callpage.js";
import Videocall from "../components/Pages/Videocall.js";
import Vcstart from "../components/Pages/Vcstart.js";
import Createpage from "../components/Grouppage/Createpage.js";
import Createpopup from "../components/Grouppage/Createpopup.js";
import Teampage from "../components/Grouppage/Teampage.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWalletOpen: false,
      isCallPageOpen: false,
      isVideoCallOpen: false,
      isVcstartOpen: false,
      isCreatePageOpen: false,
      isTeamPageOpen: false, // Add state for Teampage
      showSlide: false,
      isPopupOpen: false,
    };
  }

  toggleWallet = () => {
    this.setState({
      isWalletOpen: !this.state.isWalletOpen,
      isCallPageOpen: false,
      isVideoCallOpen: false,
      isVcstartOpen: false,
      isCreatePageOpen: false,
      isTeamPageOpen: false, // Close Teampage
      showSlide: false,
    });
  };

  toggleCallPage = () => {
    this.setState({
      isCallPageOpen: !this.state.isCallPageOpen,
      isWalletOpen: false,
      isVideoCallOpen: false,
      isVcstartOpen: false,
      isCreatePageOpen: false,
      isTeamPageOpen: false, // Close Teampage
      showSlide: false,
    });
  };

  toggleVideoCall = () => {
    this.setState({
      isVideoCallOpen: !this.state.isVideoCallOpen,
      isWalletOpen: false,
      isCallPageOpen: false,
      isVcstartOpen: false,
      isCreatePageOpen: false,
      isTeamPageOpen: false, // Close Teampage
      showSlide: false,
    });
  };

  toggleVcstart = () => {
    this.setState({
      isVcstartOpen: !this.state.isVcstartOpen,
      isWalletOpen: false,
      isCallPageOpen: false,
      isVideoCallOpen: false,
      isCreatePageOpen: false,
      isTeamPageOpen: false, // Close Teampage
      showSlide: false,
    });
  };

  toggleCreatePage = () => {
    this.setState({
      isCreatePageOpen: !this.state.isCreatePageOpen,
      isWalletOpen: false,
      isCallPageOpen: false,
      isVideoCallOpen: false,
      isVcstartOpen: false,
      isTeamPageOpen: false, // Close Teampage
      showSlide: false,
      isPopupOpen: false, // Close popup when CreatePage is opened
    });
  };

  toggleTeamPage = () => {
    this.setState({
      isTeamPageOpen: !this.state.isTeamPageOpen,
      isCreatePageOpen: false, // Close Createpage
      isWalletOpen: false,
      isCallPageOpen: false,
      isVideoCallOpen: false,
      isVcstartOpen: false,
      showSlide: false,
      isPopupOpen: false,
    });
  };

  toggleSlide = () => {
    this.setState((prevState) => ({
      showSlide: !prevState.showSlide,
    }));
  };

  toggleCreatePopup = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen, // Toggle the popup
    }));
  };

  render() {
    const { contacts, user, activeUserId } = store.getState();
    const {
      isWalletOpen,
      isCallPageOpen,
      isVideoCallOpen,
      isVcstartOpen,
      isCreatePageOpen,
      isTeamPageOpen, // Add Teampage state
      showSlide,
      isPopupOpen,
    } = this.state;

    return (
      <div className="App">
        <LeftSidebar
          contacts={_.values(contacts)}
          toggleWallet={this.toggleWallet}
          toggleCallPage={this.toggleCallPage}
          toggleVideoCall={this.toggleVideoCall}
          toggleVcstart={this.toggleVcstart}
          toggleCreatePage={this.toggleCreatePage}
          toggleCreatePopup={this.toggleCreatePopup} // Pass the function here
          showSlide={showSlide}
          toggleSlide={this.toggleSlide}
        />
        {!isWalletOpen &&
        !isCallPageOpen &&
        !isVideoCallOpen &&
        !isVcstartOpen &&
        !isCreatePageOpen &&
        !isTeamPageOpen ? ( // Include Teampage in condition
          <Main user={user} activeUserId={activeUserId} />
        ) : isWalletOpen ? (
          <Wallet toggleWallet={this.toggleWallet} />
        ) : isCallPageOpen ? (
          <CallPage
            toggleCallPage={this.toggleCallPage}
            toggleVideoCall={this.toggleVideoCall}
          />
        ) : isVideoCallOpen ? (
          <Videocall
            toggleCallPage={this.toggleCallPage}
            toggleVcstart={this.toggleVcstart}
          />
        ) : isVcstartOpen ? (
          <Vcstart
            toggleVcstart={this.toggleVcstart}
            toggleVideoCall={this.toggleVideoCall}
            toggleSlide={this.toggleSlide}
            showSlide={showSlide}
          />
        ) : isCreatePageOpen ? (
          <Createpage toggleCreatePage={this.toggleCreatePage} toggleTeamPage={this.toggleTeamPage} /> // Pass the function
        ) : isTeamPageOpen ? ( // Add Teampage condition
          <Teampage />
        ) : null}
        {isPopupOpen && <Createpopup toggleCreatePage={this.toggleCreatePage} toggleCreatePopup={this.toggleCreatePopup} />} {/* Render popup conditionally */}
      </div>
    );
  }
}

export default App;
