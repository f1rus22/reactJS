import { Box } from "@mui/system";
import React from "react";
import Message from "../Message/Message";

export const MessageList = ({ messageList }) => {
  console.log(messageList);
  return (
    <Box sx={{ height: "calc(70vh - 57px)", overflow: "auto" }}>
      {messageList.map((message) => (
        <Message
          key={message.id}
          author={message.author}
          text={message.text}
        ></Message>
      ))}
    </Box>
  );
};
