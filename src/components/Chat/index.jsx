import React, { useCallback } from "react";
import FormMessage from "../FormMessage";
import { MessageList } from "../MessageList";
import { Redirect, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectName } from "../../store/Profile/selectors";
import { sendMessageWithFB } from "../../store/Messages/actions";

export default function Chat({ chats, messages }) {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const loadMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithFB(chatId, { ...newMessage, author: name }));
    },
    [chatId, name, dispatch]
  );

  if (!chatId || !chats[chatId]) {
    return <Redirect to="chats/nochat" />;
  }

  return (
    <div>
      {!!chatId && (
        <div>
          <h1>{chats[chatId].name}</h1>
          <MessageList messageList={messages[chatId] || []} />
          <FormMessage loadMessage={loadMessage} />
        </div>
      )}
    </div>
  );
}
