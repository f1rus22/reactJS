import React, { useState, useEffect } from "react";
import FormMessage from "../../components/FormMessage/FormMessage";
import MessageList from "../../components/MessageList/MessageList";
import ChatList from "../ListItem/Chats";
import { Container, Grid } from "@material-ui/core";
import faker from "faker";
import "./style.css";

export const Main = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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
        id: faker.datatype.number(),
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
            id: faker.datatype.number(),
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
    <Container sx={{ height: "100vh" }}>
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
          <MessageList messageList={messageList} />
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

export default Main;
