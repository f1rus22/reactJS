import faker from "faker";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/Chat/actions";

export const AddChat = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    const newId = `chat${faker.datatype.number()}`;
    dispatch(addChat(newId, value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
};
