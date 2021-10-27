import React, { useState, useEffect } from "react";
import "./App.css";
import FormMessage from "./components/FormMessage/FormMessage";
import ChatList from "./components/ListItem/LisItem";
import MessageList from "./components/MessageList/MessageList";
import { Container, Grid } from "@material-ui/core";

export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const newId = 1;

  useEffect(() => {
    if (isTyping) {
      return () => clearTimeout(loadForBot);
    }
    loadForBot();
  }, [isTyping]);

  const loadMessage = () => {
    setMessageList(
      messageList.concat({
        avatar: "A",
        text: message,
        autor: "Alegzander",
      })
    );
  };

  const loadForBot = () => {
    setTimeout(
      () =>
        setMessageList(
          messageList.concat({
            avatar: "B",
            text: "thanks for yuor message:)",
            autor: "bot",
          })
        ),
      1500
    );
  };

  const handleMessFormSubmit = (event) => {
    event.preventDefault();
    setIsTyping(false);
    loadMessage();
  };

  return (
    <Container sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
      <Grid container spacing={3} rowSpacing={-3}>
        <Grid
          item
          xs={4}
          container="true"
          direction="column"
          justifyContent="center"
        >
          <ChatList />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ height: "100vh", padding: "3vh 0" }}
          container="true"
          direction="column"
          justifyContent="space-between"
        >
          <h1>Send message to Bot</h1>
          <MessageList messageList={messageList} newId={newId} />
          <FormMessage
            handleMessFormSubmit={handleMessFormSubmit}
            setIsTyping={setIsTyping}
            message={message}
            setMessage={setMessage}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
