import React from "react";
import Typography from "@material-ui/core/Typography";

const Text = props => (
  <Typography variant={props.variant} gutterBottom={true}>
    {props.children}
  </Typography>
);

export default Text;
