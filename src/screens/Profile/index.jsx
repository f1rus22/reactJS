import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeName } from "../../store/Profile/actions";
import { selectName } from "../../store/Profile/selectors";

export const Profile = () => {
  const [value, setValue] = useState("");
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container sx={{ bgcolor: "E9E9E9", height: "100vh" }}>
      <h1>This is profile</h1>
      <span>Name:</span>
      <div>{name}</div>
      <form action="" onSubmit={handleSubmit}>
        <Input
          defaultValue="Sace yor Name"
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Save name
        </Button>
      </form>
    </Container>
  );
};
