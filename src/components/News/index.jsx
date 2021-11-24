import {
  List,
  ListItem,
  Container,
  Button,
  LinearProgress,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectaArticlesError,
  selectArticlesIsLoading,
  selectArticles,
} from "../../store/Articles/selectors";
import { getArticles } from "../../store/Articles/actions";

export const News = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectArticlesIsLoading);
  const error = useSelector(selectaArticlesError);
  const articles = useSelector(selectArticles);

  const requestArticles = useCallback(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    requestArticles();
  }, []);

  if (loading) {
    return (
      <Container sx={{ height: "100vh" }}>
        <LinearProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ height: "100vh" }}>
        <h3>Request error</h3>
        <Button variant="contained" onClick={requestArticles}>
          try again
        </Button>
      </Container>
    );
  }

  if (!articles.length) {
    return (
      <Container sx={{ height: "100vh" }}>
        <h3>No articles</h3>
      </Container>
    );
  }

  return (
    <Container sx={{ height: "100vh" }}>
      <List>
        {articles.map((a) => (
          <ListItem key={a.id}>{a.title}</ListItem>
        ))}
      </List>
    </Container>
  );
};
