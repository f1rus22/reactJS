import React, { useEffect, useRef } from "react";
import "./formMessage.css";
import { Button, TextField, Box } from "@material-ui/core";

export default function FormMessage({
  handleMessFormSubmit,
  setIsTyping,
  message,
  setMessage,
}) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.focus();
  });

  return (
    <Box
      className="formMessage"
      sx={{ dispplay: "flex", height: "80px" }}
      onSubmit={handleMessFormSubmit}
    >
      <TextField
        sx={{ width: "auto" }}
        label="Message"
        variant="outlined"
        type="text"
        name="text"
        id="text"
        inputRef={ref}
        value={message}
        onChange={(event) => {
          setIsTyping(true);
          setMessage(event.target.value);
        }}
      />
      <Button
        onClick={handleMessFormSubmit}
        variant="contained"
        color="primary"
      >
        Send
      </Button>
    </Box>
  );
}
