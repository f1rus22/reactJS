import React, { useState, useEffect, useCallback } from "react";
import FormMessage from "../FormMessage/FormMessage";
import { MessageList } from "../MessageList/MessageList";
import { CHATS } from "../../constants/chats";
import faker from "faker";
import { Redirect, useParams } from "react-router";

export default function Chat() {
  const { chatId } = useParams();
  const [chats, setChats] = useState(CHATS);
  console.log(chatId);

  const loadMessage = useCallback(
    (newMessage) => {
      setChats({
        ...chats,
        [chatId]: {
          ...chats[chatId],
          messages: [...chats[chatId].messages, newMessage],
        },
      });
    },
    [chats, chatId]
  );

  useEffect(() => {
    if (
      !chatId ||
      !chats[chatId]?.messages.length ||
      chats[chatId].messages[chats[chatId].messages.length - 1].author ===
        chats[chatId].name
    ) {
      return;
    }
    const timeOut = setTimeout(() => {
      const robotMess = {
        author: chats[chatId].name,
        text: "hello",
        id: faker.datatype.number(),
      };
      loadMessage(robotMess);
    }, 1500);

    return () => clearTimeout(timeOut);
  }, [chats]);

  if (!chatId || !chats[chatId]) {
    return <Redirect to="chats/nochat" />;
  }

  return (
    <div>
      {!!chatId && (
        <div>
          <h1>{chats[chatId].name}</h1>
          <MessageList messageList={chats[chatId].messages} />
          <FormMessage loadMessage={loadMessage} />
        </div>
      )}
    </div>
  );
}
