import { Container, Grid } from "@mui/material";
import Chat from "../../components/Chat";
import ChatList from "../../components/ChatList";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectChatsToFB } from "../../store/Chat/actions";
import { connectMessagesToFB } from "../../store/Messages/actions";
import { selectChats } from "../../store/Chat/selectors";
import { selectMessages } from "../../store/Messages/selectors";

export default function Main() {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid container spacing={3} rowSpacing={-3}>
        <Grid
          item
          xs={4}
          container="true"
          direction="column"
          justifyContent="center"
        >
          <ChatList chats={chats} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ height: "100vh", padding: "3vh 0" }}
          container="true"
          direction="column"
          justifyContent="space-between"
        >
          <Chat chats={chats} messages={messages} />
        </Grid>
      </Grid>
    </Container>
  );
}
