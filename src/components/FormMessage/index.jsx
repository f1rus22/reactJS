import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useState, useCallback } from "react";
import faker from "faker";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectName } from "../../store/Profile/selectors";

export default function FormMessage({ loadMessage }) {
  const [value, setValue] = useState("");

  const profileName = useSelector(selectName);

  const changeFormValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadMessage({
      author: profileName,
      text: value,
      id: faker.datatype.number(),
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Input
          fullWidth="true"
          autoFocus
          value={value}
          onChange={changeFormValue}
          type="text"
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
