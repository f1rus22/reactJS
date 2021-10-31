import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
} from "@material-ui/core";
import faker from "faker";
import { useParams } from "react-router";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import MessageList from "../../components/MessageList/MessageList";

export default function ChatList() {
  const [chatsList, setChatsList] = useState([]);

  function addChat() {
    setChatsList([
      ...chatsList,
      {
        id: faker.datatype.number(),
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
      },
    ]);
  }

  const params = useParams();
  console.log(params);

  function removeChat(id) {
    const newChatsList = chatsList.filter((item) => item.id !== id);
    setChatsList(newChatsList);
  }

  return (
    <BrowserRouter>
      <List sx={{ width: "700px" }}>
        {chatsList.map((elem) => (
          <Link to={`/chats/chatId${elem.id}`}>
            <ListItem key={elem.id} disableGutters>
              <Avatar src={elem.avatar} />
              <ListItemText primary={`Chat with ${elem.name}`} />
              <Button
                onClick={() => removeChat(elem.id)}
                aria-label="delete"
                variant="contained"
                color="Primary"
              >
                Del
              </Button>
            </ListItem>
          </Link>
        ))}
        <Button color="Primary" variant="contained" onClick={addChat}>
          Add chat
        </Button>
      </List>
      <Switch>
        {chatsList.map((elem) => (
          <Route exact path={`/chats/chatId${elem.id}`}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
