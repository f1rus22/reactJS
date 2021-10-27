import React from "react";
import "./messageList.css";
import { Avatar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default function MessageList({ messageList, newId }) {
  return (
    <div className="messageList">
      <ul>
        {messageList.map((message) => {
          return (
            <div className="message" key={newId++}>
              <Avatar sx={{ bgcolor: red }}>{message.avatar}</Avatar>
              <div>{message.autor}</div>
              <div>{message.text}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
