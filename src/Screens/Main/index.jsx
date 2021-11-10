import { Container, Grid } from "@mui/material";
import Chat from "../../components/Chat/Chat";
import ChatList from "../../components/ChatList/ChatList";
import { CHATS } from "../../constants/chats";

export default function Main() {
  return (
    <Container sx={{ bgcolor: "E9E9E9", height: "100vh" }}>
      <Grid container spacing={3} rowSpacing={-3}>
        <Grid
          item
          xs={4}
          container="true"
          direction="column"
          justifyContent="center"
        >
          <ChatList chats={CHATS} />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ height: "100vh", padding: "3vh 0" }}
          container="true"
          direction="column"
          justifyContent="space-between"
        >
          <Chat />
        </Grid>
      </Grid>
    </Container>
  );
}
