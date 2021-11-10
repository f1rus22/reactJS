import List from "@mui/material/List";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { DeleteForever } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function ChatList({ chats }) {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        {Object.values(chats).map((c) => (
          <ListItem key={c.id}>
            <ListItemAvatar>
              <Avatar alt="" />
            </ListItemAvatar>
            <Link to={`/chats/${c.id}`}>{c.name}</Link>
            <Button>
              <DeleteForever />
            </Button>
          </ListItem>
        ))}
      </List>
      <Button>Add Chat</Button>
    </>
  );
}
