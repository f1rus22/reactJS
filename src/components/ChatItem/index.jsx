import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Link } from "react-router-dom";
import { DeleteForever } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../../store/Chat/actions";

export const ChatItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteChatWithFB(id));
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="" />
      </ListItemAvatar>
      <Link to={`/chats/${id}`}>{name}</Link>
      <Button variant="contained" onClick={handleDelete}>
        Delete chat
        <DeleteForever />
      </Button>
    </ListItem>
  );
};
