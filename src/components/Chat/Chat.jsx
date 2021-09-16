import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../firebase";
import Message from "./Message/Message";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((sp) => setRoomDetails(sp.data()));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((sp) => setRoomMessages(sp.docs.map((s) => s.data())));

      console.log(typeof roomMessages, roomMessages);
      roomMessages.map((m) => console.log(m));
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-header-left">
          <h4 className="chat-channel-name">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="char-header-right">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat-messages">
        {roomMessages &&
          roomMessages.map((m) => (
            <Message
              message={m.message}
              user={m.user}
              userImage={m["user-image"]}
              timestamp={m.timestamp}
            />
          ))}
      </div>
    </div>
  );
}

export default Chat;
