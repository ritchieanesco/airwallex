import React from "react";
import Typography from "@material-ui/core/Typography";
import { node, string } from "prop-types";

const Text = props => (
  <Typography variant={props.variant} gutterBottom={true}>
    {props.children}
  </Typography>
);

Text.propTypes = {
  variant: string,
  children: node
};

export default Text;
