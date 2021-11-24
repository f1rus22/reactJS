import { AppBar, Button, Container, Toolbar } from "@mui/material";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ROUTES } from "../../constants/const";
import Main from "../../screens/Main";
import { NoChat } from "../../screens/NoChat";
import { Profile } from "../../screens/Profile";
import SignIn from "../Singin";
import { News } from "../News";
import SignUp from "../Singup";
import { Home } from "../../screens/Home";
import PrivateRoute from "../../HOCS/PrivateRoute";
import PublicRoute from "../../HOCS/PublicRoute";

export default function Router() {
  const [isAuthed, setIsAuthed] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    });
  });
  return (
    <BrowserRouter>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to={ROUTES.CHAT}>CHATS</Link>
            </Button>
            <Button>
              <Link to={ROUTES.PROFILE}>PROFILE</Link>
            </Button>
            <Button>
              <Link to={ROUTES.NEWS}>NEWS</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Switch>
        <PublicRoute exact path={ROUTES.HOME} authenticated={isAuthed}>
          <Home />
        </PublicRoute>
        <PrivateRoute exact path={ROUTES.PROFILE} authenticated={isAuthed}>
          <Profile />
        </PrivateRoute>
        <Route exact path={ROUTES.NEWS}>
          <News />
        </Route>
        <PrivateRoute path={ROUTES.CHATS} authenticated={isAuthed}>
          <Main />
        </PrivateRoute>
        <PublicRoute path={ROUTES.SINGIN} authenticated={isAuthed}>
          <SignIn />
        </PublicRoute>
        <PublicRoute path={ROUTES.SINGUP} authenticated={isAuthed}>
          <SignUp />
        </PublicRoute>
        <PrivateRoute path="chats/nochat" authenticated={isAuthed}>
          <NoChat />
        </PrivateRoute>
        <Route path="*">
          <h2>404 Page Not Found</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
