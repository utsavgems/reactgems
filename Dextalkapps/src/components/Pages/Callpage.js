import React from "react";
import "./Callpage.css";
import { Personimg } from "../../containers/User";
import fluentcall from "../../Images/fluentcall.png";
import call3dicon from "../../Images/3dcallicon.png";
import round11 from "../../Images/round11.png";
import round12 from "../../Images/round12.png";
import round13 from "../../Images/round13.png";
import round14 from "../../Images/round14.png";
import round15 from "../../Images/round15.png";
import round16 from "../../Images/round16.png";
import Videocall from "./Videocall";

class CallPage extends React.Component {
    handleVideoCallClick = () => {
      this.props.toggleVideoCall();
    };


  render() {
    return (
      <div className="callpage">
        <div className="call-page-background">
          <div className="callpage-round1">
            <img src={round11} className="round1-bg" alt="Round 1" />
          </div>
          <div className="callpage-round2">
            <img src={round12} className="round2-bg" alt="Round 2" />
          </div>
          <div className="callpage-round3">
            <img src={round13} className="round3-bg" alt="Round 3" />
          </div>
          <div className="callpage-round4">
            <img src={round14} className="round4-bg" alt="Round 1" />
          </div>
          <div className="callpage-round5">
            <img src={round15} className="round5-bg" alt="Round 2" />
          </div>
          <div className="callpage-round6">
            <img src={round16} className="round6-bg" alt="Round 3" />
          </div>
        </div>

        <div className="callpage-section1">
          <div className="instant-call-head">
            <h4 className="callpage-heading-text">
              <span>
                <img src={call3dicon} className="call3dicon" />
              </span>
              Make instant calls with Dextalk
            </h4>
            <p className="callpage-para-sec-1">
              All the calls are end-to-end secured
            </p>
          </div>

          <div className="phonenumber-input">
            <select className="country-code-callpage">
              <option className="country-code-option" value="+1">
                +1
              </option>
              <option className="country-code-option" value="+91">
                +91
              </option>
              <option className="country-code-option" value="+44">
                +44
              </option>
              <option className="country-code-option" value="+61">
                +61
              </option>
           
            </select>
            <input
              type="text"
              className="phone-input-callpage"
              placeholder="Enter phone number"
            />
            <button className="callpage-Voicecall">Voice Call</button>
          </div>
          <div className="optional-or-title">
            <p className="or-text">or</p>
          </div>

          <div className="start-Videocall">
          <button className="callpage-Videocall-btn" onClick={this.handleVideoCallClick}>
              Start a Video Call
            </button>
          </div>
        </div>

        <div className="callpage-section2">
          <div className="callpage-sec2-title">
            <p className="sec2-frd-text">Friends</p>
            <p className="sec2-count-text">10</p>
          </div>

          <div className="callpage-search-btn">
            <form action="/search" method="get">
              <input
                type="search"
                id="site-search callpage-sec2-search"
                name="q"
                aria-label="Search through site content"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="callpage-call-details">
            <div className="callpage-userdetails">
              <div className="sec2-userdetails">
                <img src={Personimg} className="User__pic" />
                <p className="callpage-username">Dev-Ana Ho</p>
              </div>
              <div className="callpage-fluentcallicon-sec2">
                <img src={fluentcall} className="callpage-fluentcallicon" />
              </div>
            </div>
          </div>

          <div className="callpage-hr">
            <hr className="sec2-callpage-hr" />
          </div>

          <div className="callpage-call-details">
            <div className="callpage-userdetails">
              <div className="sec2-userdetails">
                <img className="callpage-User-pic-2" />
                <p className="callpage-username-2"></p>
              </div>
              <div className="callpage-fluentcallicon-sec2">
                <img src={fluentcall} className="callpage-fluentcallicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallPage;
