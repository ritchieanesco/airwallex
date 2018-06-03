import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { object } from "prop-types";

const styles = {
  footer: {
    flexGrow: 1,
    padding: "12px 0"
  },
  copyright: {
    fontSize: "12px"
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={11}>
          <Typography
            className={classes.copyright}
            variant="body1"
            color="inherit"
          >
            &copy; 2018 Broccoli & Co
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: object
};

export default withStyles(styles)(Footer);
