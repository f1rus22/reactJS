import React, { useCallback } from "react";
import FormMessage from "../FormMessage";
import { MessageList } from "../MessageList";
import { Redirect, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { sendMessageWithReplay } from "../../store/Chat/actions";
import { useSelector } from "react-redux";
import { selectName } from "../../store/Profile/selectors";

export default function Chat({ chats }) {
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const loadMessage = useCallback(
    (newMessage) => {
      dispatch(
        sendMessageWithReplay(chatId, { ...newMessage, author: name }, [
          chats[chatId].name,
        ])
      );
    },
    [chatId]
  );

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
