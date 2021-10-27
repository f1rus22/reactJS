import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function ChatList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[1, 2, 3].map((value) => (
        <ListItem key={value} disableGutters>
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
  );
}
