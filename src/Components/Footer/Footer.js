import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { object } from "prop-types";

const styles = {
  footer: {
    flexGrow: 1,
    padding: "12px 0",
    fontSize: "12px",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    fontFamily: "Arial"
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={11}>
          &copy; 2018 Broccoli & Co
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: object
};

export default withStyles(styles)(Footer);
