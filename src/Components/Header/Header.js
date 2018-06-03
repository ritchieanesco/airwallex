import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { object } from "prop-types";
import logo from "./logo.svg";

const styles = theme => ({
  header: {
    flexGrow: 1,
    padding: "12px 0",
    background: "#FFFFFF"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    color: "#4caf50"
  },
  company: {
    fontSize: "16px",
    fontWeight: "800",
    marginLeft: "8px"
  }
});

const Header = props => {
  const { classes } = props;

  return (
    <header className={classes.header}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={11} className={classes.logo}>
          <img src={logo} height="40" alt="logo" />
          <Typography
            className={classes.company}
            variant="title"
            color="inherit"
          >
            Broccoli & Co.
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
};

Header.propTypes = {
  classes: object
};

export default withStyles(styles)(Header);
