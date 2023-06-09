import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/event";

import memories from "./images/memories.png";
import Events from "./components/Posts/Events";
import EForm from "./components/Form/EForm";

import useStyles from "./styles";

const EApp = (props) => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          {props.heading}
        </Typography>

        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Events setCurrentId={setCurrentId}tag={props.tag} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <EForm currentId={currentId} setCurrentId={setCurrentId} tag={props.tag} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default EApp;
