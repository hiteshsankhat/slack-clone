import React from "react";
import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
  console.log(timestamp.toDate());
  return (
    <div className="message">
      <img src={userImage} alt="user-image" />
      <div className="message-info">
        <h4>
          {user} <span className="message-timestamp">{new Date(timestamp.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
