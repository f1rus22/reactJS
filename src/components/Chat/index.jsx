import React, { useEffect, useCallback } from "react";
import FormMessage from "../FormMessage";
import { MessageList } from "../MessageList";
import faker from "faker";
import { Redirect, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/Chat/actions";

export default function Chat({ chats }) {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const loadMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessage(chatId, newMessage));
    },
    [chatId]
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
