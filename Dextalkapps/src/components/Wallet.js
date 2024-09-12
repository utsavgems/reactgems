import React from "react";
import "./Wallet.css";
import Goldcoin from "../Images/goldcoin.png";
import bitcoinicon from "../Images/bitcoinicon.png";
import ethereumicon from "../Images/ethereumicon.png";
import colorwallet from "../Images/colorwallet.png";
import Copyiocns from "../Images/copyiocns.png";
import { Link } from "react-router-dom";

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showConnectForm: false, // State to manage whether the connect form should be displayed
      showTransferForm: false,
      showBilligForm: false,
    };
  }

  handleConnectClick = () => {
    this.setState({
      showConnectForm: true,
      showTransferForm: false, // Ensure transfer form is hidden
      showBillingForm: false, // Ensure transfer form is hidden
    });
  };

  handleTransferClick = () => {
    this.setState({
      showConnectForm: false, // Ensure connect form is hidden
      showTransferForm: true,
      showBillingForm: false, // Ensure Billing form is hidden
    });
  };

  handleBillingClick = () => {
    this.setState({
      showConnectForm: false, // Ensure connect form is hidden
      showTransferForm: false, // Ensure Billing form is hidden
      showBillingForm: true,
    });
  };

  handleCloseForm = () => {
    this.setState({
      showConnectForm: false,
      showTransferForm: false,
      showTransferForm: false,
    });
  };

  render() {
    return (
      <div className="wallet-bg">
        <div className="wallatepage">
          <div className="pagesldier" />
          <div className="dextalk-head">
            <h2 className="dextalk-head-text">Dextalk</h2>
            <p className="cryptptext">Transfer crypto in seconds</p>
          </div>

          {/* Show link to connect wallet */}
          {!this.state.showConnectForm &&
            !this.state.showTransferForm &&
            !this.state.showBillingForm && (
              <div className="cryptocard">
                <img src={Goldcoin} className="dp-image" alt="Goldcoin" />
                <p className="cryptocard-para">
                  Get started by just connecting your crypto <br />
                  wallet with dextalk
                </p>
                <Link
                  to="#"
                  className="connect-wallet-btn"
                  onClick={this.handleConnectClick}
                >
                  Connect your Wallet
                </Link>
              </div>
            )}

          {/* Connect wallet form */}
          {this.state.showConnectForm && (
            <div className="wallet-form">
              <div className="card-slide-lines">
                <hr className="Card-slide-line1" />
                <hr className="Card-slide-line2" />
                <hr className="Card-slide-line3" />
              </div>
              <div className="wallet_card2">
                <div className="wallte-card-sec1">
                  <img className="card2-img1" />
                  <div className="wallet-user-text">
                    <h6 className="wallet-user-name">Arun Singh</h6>
                    <p className="user-id">
                      Cdsdse882jnhSDfFd <span><img src={Copyiocns} className="userid-copyicon"/></span>
                    </p>
                  </div>
                </div>

                <div className="transfer-cards-row">
                  <div className="card-part1">
                    <div className="wallet-currancy">
                      <img
                        src={bitcoinicon}
                        className="currancy-icons"
                        alt="Bitcoin"
                      />
                      <p className="Currancy-text">Bitcoin</p>
                    </div>
                    <p className="currancy-price">$0.0000023</p>
                  </div>

                  <div>
                    <hr className="card-hr" />
                  </div>

                  <div className="card-part1">
                    <div className="wallet-currancy">
                      <img
                        src={ethereumicon}
                        className="currancy-icons"
                        alt="Ethereum"
                      />
                      <p className="Currancy-text">Ethereum</p>
                    </div>
                    <p className="currancy-price">$12.45</p>
                  </div>
                </div>

              </div>
                <div className="bottomside-btn">
                  <button
                    className="crypto-transfer-btn"
                    onClick={this.handleTransferClick}
                  >
                    Transfer Crypto
                  </button>
                </div>
            </div>
          )}

          {/* Transfer form */}
          {this.state.showTransferForm && (
            <div className="transfer-form">
              <div className="card-slide-lines">
                <hr className="Card-slide-line1" />
                <hr className="Card-slide-line2 secondline" />
                <hr className="Card-slide-line3" />
              </div>
              {/* <h3>Transfer Form</h3> */}
              <div className="receivercard">
                <div className="recivecard-section">
                  <img src={colorwallet} className="colorwallet" />
                  <div className="reciver-text">
                    <h6 className="reciver-address-text">Receiver's address</h6>
                    <p className="Wallet-address-text">
                      wallet address of the user to whom you <br /> want to
                      transfer
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <hr className="reciver-hr" />
              </div>
              {/* <button onClick={this.handleCloseForm}> */}
              <button
                onClick={this.handleBillingClick}
                className="receiver-btn"
              >
                Next
              </button>
            </div>
          )}

          {this.state.showBillingForm && (
           
          <div className="crypto-billing-page">
          <div className="card-slide-lines">
                <hr className="Card-slide-line1" />
                <hr className="Card-slide-line2 secondline" />
                <hr className="Card-slide-line3 thirdline" />
              </div>
  <div className="form-heading">
  <div className="form-head-text">
    <img src={Goldcoin} className="form-head-img" alt="Form Image" />
    <p className="form-text-head">
      Choose the Currency and amount to transfer
    </p>
    </div>
    <div className="form-horizontal-line">
      <hr className="hr-form-linner" />
    </div>
  </div>
  <form className="crypto-billing-form needs-validation" noValidate>
  <div className="form-group-text">
    <div className="form-group-group crypto-billing-Currency">
      <label htmlFor="currencySelect" className="form-label billing-Currency-label">
        Currency
      </label>
      <div className="custom-dropdown">
      <select className="form-select billing-form-selection" id="currencySelect" required>
        <option selected disabled  value="optionicon">Etherium </option> 
        <option  value="etherium">Etherium</option>
        <option  value="bitcoin">Bitcoin</option>
      </select>
      </div>
      {/* <div className="invalid-tooltip billing-choose-validation">Please select a valid Currency.</div> */}
    </div>
    <div className="form-group-group crypto-billing-Amount">
      <label htmlFor="amountInput" className="form-label billing-Amount-text"> Amount </label>
      <input type="number" className="form-control" id="amountInput" placeholder="$0.000" required />
      {/* <div className="valid-tooltip">Looks good!</div> */}
    </div>
    </div>
    <div className="form-group-group crypto-Theyreceive-section">
      <label htmlFor="theyReceiveInput" className="form-label billing-Theyreceive-text"> They receive</label>
      <input type="number" className="form-control" id="theyReceiveInput" placeholder="$0.000" required />
      {/* <div className="invalid-tooltip billing-Theyreceive-validation">Please provide a valid amount.</div> */}
    </div>
    <div className="form-group-text">
    <div className="form-group-group crypto-billing-Receiver">
      <label htmlFor="receiverInput" className="form-label billing-Receiver-label">
        Receiver
      </label>
      <input type="text" className="form-control" id="receiverInput" required />
      {/* <div className="invalid-tooltip billing-Receiver-validation">Please provide a valid Receiver.</div> */}
    </div>
    <div className="form-group-group">
      <button className="crypto-billing-btn" type="submit">
        Proceed to payment
      </button>
    </div>
    </div>
  </form>
</div>


          )}
        </div>
      </div>
    );
  }
}

export default Wallet;
