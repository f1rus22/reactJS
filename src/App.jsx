import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { Profile } from "./Screens/Profile/Profile";
import ChatList from "./Screens/ListItem/Chats";
import { Main } from "./Screens/Main/Main";
import { ROUTES } from "./Constants/constants";

export default function App() {
  return (
    <BrowserRouter sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to={ROUTES.MAIN}>Main</Link>
          </Button>
          <Button color="inherit">
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route path="not-found">Page not found 404</Route>
        <Route path="*">
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
