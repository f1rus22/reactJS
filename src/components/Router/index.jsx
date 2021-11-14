import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ROUTES } from "../../constants/const";
import Main from "../../screens/Main";
import { NoChat } from "../../screens/NoChat";
import { Profile } from "../../screens/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to={ROUTES.HOME}>HOME</Link>
            </Button>
            <Button>
              <Link to={ROUTES.CHAT}>CHATS</Link>
            </Button>
            <Button>
              <Link to={ROUTES.PROFILE}>PROFILE</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <h2>Welcome</h2>
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route path={ROUTES.CHATS}>
          <Main />
        </Route>
        <Route path="*">
          <h2>404 Page Not Found</h2>
        </Route>
        <Route path="chats/nochat">
          <NoChat />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
