import React, {useState} from "react";
import store from "../store";
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";
import EmojiPicker from 'emoji-picker-react';
import smileicon from "../Images/smileicon.png";
import gificon from "../Images/gificon.png";
import pictureicon from "../Images/pictureicon.png";

const MessageInput = ({ value }) => {
  const state = store.getState();

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setSelectedEmoji(emojiObject);
    setShowEmojiPicker(false); // hide the emoji picker after selecting an emoji
  };

  const GIFs = [
    'https://media.giphy.com/media/26gR1U8TkNDzAWg3S/giphy.gif',
    'https://media.giphy.com/media/5xaOcLyf0hPjpKYq3PG/giphy.gif',
    'https://media.giphy.com/media/3o6Zt481isNVuQIcC0/giphy.gif',
    'https://media.giphy.com/media/XRB1uf2I7hKJy/giphy.gif',
    'https://media.giphy.com/media/4QFj12Jsdye9S/giphy.gif',
  ];

  

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="Send Something"
      />

      <div className="inputicons">
      {showEmojiPicker && (
        <div style={{ position: 'absolute', zIndex: 1 }}>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      {selectedEmoji && <p>Selected Emoji: {selectedEmoji.emoji}</p>}
      <img
        className="smileicon"
        src={smileicon}
        alt="smile icon"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        style={{ cursor: 'pointer' }}
      />


<img className="gificon" src={gificon}/>
<img className="pictureicon" src={pictureicon}/>
<div className="sendbtn">
<div class="vertical-line-input"></div>
  <h6 className="sendicon">send</h6>
</div>
      </div>
    </form>
  );
};

export default MessageInput;