import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Text from "../Text/Text";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class InviteForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, confirmEmail } = event.currentTarget.elements;
    this.props.submitForm({
      name: name.value,
      email: email.value,
      confirmEmail: confirmEmail.value
    });
  };

  render() {
    const { classes, errors } = this.props;
    return (
      <Fragment>
        <Text variant="title" id="invite-modal-title">
          Request an Invite
        </Text>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name"
            label="Name"
            name="name"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Name"
            fullWidth
            margin="normal"
            error={errors.name}
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Email"
            fullWidth
            margin="normal"
            error={errors.email}
          />
          <TextField
            id="confirm-email"
            label="Confirmation Email"
            name="confirmEmail"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Confirmation Email"
            fullWidth
            margin="normal"
            error={errors.confirmEmail}
          />
          <Button
            type="submit"
            className={classes.button}
            variant="raised"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(InviteForm);
