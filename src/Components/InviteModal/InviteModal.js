import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { object, node, bool, func } from "prop-types";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    width: "280px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

const InviteModal = props => {
  const { classes } = props;
  return (
    <Modal
      aria-labelledby="invite-modal-title"
      aria-describedby="invite-modal-description"
      open={props.open}
      onClose={props.onClose}
    >
      <div className={classes.paper}>{props.children}</div>
    </Modal>
  );
};

InviteModal.propTypes = {
  classes: object,
  children: node,
  open: bool,
  onClose: func
};

export default withStyles(styles)(InviteModal);
