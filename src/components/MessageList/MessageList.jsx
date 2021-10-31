import React from "react";
import { Avatar } from "@material-ui/core";
import "./messageList.css";

export default function MessageList({ messageList }) {
  return (
    <div>
      <h1>Send message to Bot</h1>
      <div className="messageList scrollList">
        <ul>
          {messageList.map((message) => {
            return (
              <div className="message" key={message.id}>
                <Avatar src={message.avatar} />
                <div>{message.autor}</div>
                <div>{message.text}</div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
