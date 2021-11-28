import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import faker from "faker";
import { Box } from "@mui/system";
import { useInput } from "../../utils/useInput";

export default function FormMessage({ loadMessage }) {
  const { value, handleChange, reset } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loadMessage({
      text: value,
      id: faker.datatype.number(),
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Input
          autoFocus
          value={value}
          onChange={handleChange}
          type="text"
          fullWidth
        />
        <Button
          variant="contained"
          style={{ height: "37px" }}
          onClick={handleSubmit}
        >
          <SendIcon />
        </Button>
      </Box>
    </form>
  );
}
