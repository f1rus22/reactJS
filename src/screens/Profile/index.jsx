import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { EXAMPLE_ACTION } from "../../store/actionTypes";

export const Profile = () => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setShowName = () => {
    dispatch({
      type: EXAMPLE_ACTION,
    });
  };

  console.log(showName, name);

  return (
    <Container sx={{ bgcolor: "E9E9E9", height: "100vh" }}>
      <h1>This is profile</h1>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </Container>
  );
};
