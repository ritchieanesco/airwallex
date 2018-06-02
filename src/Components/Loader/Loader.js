import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  }
});

const Loader = props => {
  const { classes } = props;
  return <CircularProgress className={classes.progress} thickness={7} />;
};

export default withStyles(styles)(Loader);
