import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
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
      onClose={props.handleClose}
    >
      <div className={classes.paper}>{props.children}</div>
    </Modal>
  );
};

export default withStyles(styles)(InviteModal);
