import React, { Component } from 'react';
import "./Createpage.css";
import circleimg2 from "../../Images/circleimg2.png";
import circleimg1 from "../../Images/circleimg1.png";
import profilepic from "../../Images/profilepic.png";
import profileplus from "../../Images/profileplus.png";

class Createpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: null, // To track which form should be displayed
    };
  }

  handleCardClick = (type) => {
    this.setState({ selectedType: type });
  };

  handleBackClick = () => {
    this.setState({ selectedType: null });
  };

  handleNextClick = () => {
    this.props.toggleTeamPage();
  };

  renderForm = () => {
    const { selectedType } = this.state;
    
    switch (selectedType) {
      case 'friends':
        return (
          <div className='form-container'>
           <div className='createpage-form'>
           <div className='createpage-form-sec1'>
             <h4 className='createpage-form-text'>Customize your group</h4>
             <p className='createpage-form-para'>Give your group a name that suits the best and a picture that makes it stand out</p>
           </div>

           <div className='createpage-form-sec2'>
             <div className='createpage-form-profile'>
               <img src={profilepic} className='createpage-form-img' alt="Profile" />
               <img src={profileplus} className='createpage-form-pluseimg' alt="Add Profile" />
             </div>

             <div className='createpage-form-inputfiled'>
               <input type='text' placeholder='Groups name' className='createpage-form-input'/>
             </div>
           </div>
           
           <div className='createpage-form-hr'>
             <hr className='createpage-form-vertical-line'/>
           </div>
           
           <div className='createpage-form-sec3'>
             <button className='createpage-form-backbtn' onClick={this.handleBackClick}>Back</button>
             <button className='createpage-form-Nextbtn' onClick={this.handleNextClick}>Next</button> {/* Add onClick */}
           </div>
           </div>
          </div>
        );
      case 'professional':
        return (
          <div className='form-container'>
          <div className='createpage-form'>
          <div className='createpage-form-sec1'>
            <h4 className='createpage-form-text'>Customize your group</h4>
            <p className='createpage-form-para'>Give your group a name that suits the best and a picture that makes it stand out</p>
          </div>

          <div className='createpage-form-sec2'>
            <div className='createpage-form-profile'>
              <img src={profilepic} className='createpage-form-img' alt="Profile" />
              <img src={profileplus} className='createpage-form-pluseimg' alt="Add Profile" />
            </div>

            <div className='createpage-form-inputfiled'>
              <input type='text' placeholder='Groups name' className='createpage-form-input'/>
            </div>
          </div>
          
          <div className='createpage-form-hr'>
            <hr className='createpage-form-vertical-line'/>
          </div>
          
          <div className='createpage-form-sec3'>
            <button className='createpage-form-backbtn' onClick={this.handleBackClick}>Back</button>
            <button className='createpage-form-Nextbtn' onClick={this.handleNextClick}>Next</button> {/* Add onClick */}
          </div>
          </div>
         </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="createpage-container">
        {this.state.selectedType === null ? (
          <div className='createpage-card'>
            <div className='createpage-section1'>
              <h4 className='createpage-title'>Tell us more about your group</h4>
              <p className='createpage-para'>In order to help you with your group, is your new group just for your friends or a larger community?</p>
            </div>

            <div className='createpage-section2'>
              <div className='createpage-card1' onClick={() => this.handleCardClick('friends')}>
                <p className='createpage-card-text1'>For friends and casuals</p>
                <img src={circleimg2} className='createpate-cardimg1' alt='Friends and Casuals'/>
              </div>
              <div className='createpage-card2' onClick={() => this.handleCardClick('professional')}>
                <p className='createpage-card-text1'>Work related and professionals</p>
                <img src={circleimg1} className='createpate-cardimg1' alt='Work Related and Professionals'/>
              </div>
            </div>
          </div>
        ) : (
          this.renderForm()
        )}
      </div>
    );
  }
}

export default Createpage;
