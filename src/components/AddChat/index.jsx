import faker from "faker";
import React from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/Chat/actions";
import { useInput } from "../../utils/useInput";

export const AddChat = () => {
  const dispatch = useDispatch();
  const { value, handleChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newId = `chat${faker.datatype.number()}`;
    dispatch(addChat(newId, value));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
};
