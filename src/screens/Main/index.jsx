import { Container, Grid } from "@mui/material";
import Chat from "../../components/Chat";
import ChatList from "../../components/ChatList";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectChat } from "../../store/Chat/selectors";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/Chat/actions";

export default function Main() {
  const dispatch = useDispatch();
  const handleDeleteChat = useCallback((id) => {
    dispatch(deleteChat(id));
  }, []);
  const chats = useSelector(selectChat);
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
          <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ height: "100vh", padding: "3vh 0" }}
          container="true"
          direction="column"
          justifyContent="space-between"
        >
          <Chat chats={chats} />
        </Grid>
      </Grid>
    </Container>
  );
}
