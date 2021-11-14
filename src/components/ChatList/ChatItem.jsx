import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

export const ChatItem = ({ id, name, onDeleteChat }) => {
  const handleDelete = () => {
    onDeleteChat(id);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="" />
      </ListItemAvatar>
      <Link to={`/chats/${id}`}>{name}</Link>
      <Button onClick={handleDelete}>
        <DeleteForever />
      </Button>
    </ListItem>
  );
};
