import React from "react";
import { useDispatch } from "react-redux";
import { addChatWithFB } from "../../store/Chat/actions";
import { useInput } from "../../utils/useInput";

export const AddChat = React.memo(() => {
  const dispatch = useDispatch();
  const { value, handleChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    dispatch(addChatWithFB(value));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} placeholder="Create chat" />
    </form>
  );
});
