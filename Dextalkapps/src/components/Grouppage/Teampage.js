import React, { useState } from 'react';
import './Teampage.css'; 
import Topbfg from "../../Images/topbfg.png";
import Peopleteam from "../../Images/peopleteam.png";
import Personimg from "../../Images/personicon.png";
import Smileicon from "../../Images/smileicon.png";
import Pictureicon from "../../Images/pictureicon.png";

function Teampage() {
  const [isChatOpen, setIsChatOpen] = useState(true); // Chat window open by default
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(['Hello!', 'Welcome to the chat.']); // Initial messages

  const openChat = () => {
    setIsChatOpen(true);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="Teampage-layout">
      <div className="Teampage-left-sidebar">
        <div className='Teampage-section-1'>
          <img src={Topbfg} className='Teampage-topside-img'/>
          <div className='Teampage-icn-tex'>
            <img src={Peopleteam} className='Teampage-teamicon'/>
            <p className='Teampage-genrate-text'>Generate one team</p>
          </div>
          <form>
            <input className='Teampage-search-input' placeholder='Search' type='search'/>
          </form>
        </div>

        <div className='Teampage-section-2'>
          <div className='Teampage-sec2-text'>
            <p className='Teampage-members-text'>Members</p>
            <p className='Teampage-members-number'>20</p>
          </div>

          <div className='Teampage-sidebar-chaticon'>
            <div className='Teampage-user-details' onClick={openChat}>
              <div className="Teampage-green-dots"></div>
              <img src={Personimg} className='User__pic Teampage'/>
              <p className='Teampage-username'>Dev - Ana Ho</p>
            </div>

            <div className='Teampage-user-details' onClick={openChat}>
              <div className="Teampage-grey-dots"></div>
              <img src={Personimg} className='Teampage-userpic'/>
              <p className='Teampage-username'>Arun Singh</p>
            </div>

            <div className='Teampage-user-details'>
              <img className='Teampage-blank-userpic'/>
              <p className='Teampage-username-blank'></p>
            </div>

            <div className='Teampage-user-details'>
              <img className='Teampage-blank-userpic'/>
              <p className='Teampage-username-blank'></p>
            </div>
          </div>
        </div>

        <div className='Teampage-section-3'>
          <button className='Teampage-members-btn'>Manage Members</button>    
          <button className='Teampage-setting-btn'>Group Settings</button>    
        </div>
      </div>
      
      <div className={`Teampage-chat-window ${isChatOpen ? 'open' : ''}`}>
        <p className='Teampage-date'>Today, 1st June 2024</p>
        <div className='Teampage-details'>
          <p className="Teampage-message2">Hey Ana</p>   
          <p className='Teampage-text-A'>A</p>
          <p className='Teampage-text-pluse'>+</p>
          <p className="Teampage-message1">Yes Bro</p>   
        </div>

        <div className="Teampage-messages">
          {messages.map((msg, index) => (
            <p key={index} className="Teampage-message">{msg}</p>
          ))}
        </div>
        
        <div className="Teampage-chat-input">
          <input 
            type="text" 
            value={message} 
            onChange={handleMessageChange}
            placeholder="Send something..." 
            className="Teampage-input-field"
          />
          <img src={Smileicon} className='Teampage-smile-icon'/>
          <img src={Pictureicon} className='Teampage-picture-icon'/>
          <hr className='Teampage-vertical-line'/>
          <button onClick={handleSendMessage} className="Teampage-send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Teampage;
