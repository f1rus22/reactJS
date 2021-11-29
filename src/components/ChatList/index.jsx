import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { AddChat } from "../AddChat";
import { ChatItem } from "../ChatItem";

export default function ChatList({ chats, onDeleteChat, onAddChat }) {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        {Object.values(chats).map((c) => (
          <ChatItem
            name={c.name}
            key={c.id}
            id={c.id}
            onDeleteChat={onDeleteChat}
          />
        ))}
      </List>
      <ListItem>
        <AddChat onAddChat={onAddChat} />
      </ListItem>
    </>
  );
}
