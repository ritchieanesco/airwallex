import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Text from "../Text/Text";
import Loader from "../Loader/Loader";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  buttonWrapper: {
    position: "relative"
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

  handleChange = event => {
    this.props.inputChange(event.currentTarget.name, event.currentTarget.value);
  };

  render() {
    const { classes, errors, fields, isSubmitting } = this.props;
    console.log("fields from form", fields);
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
            value={fields.name}
            onChange={e => this.handleChange(e)}
            helperText={
              errors.name && "Name must be at least 3 characters long"
            }
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
            value={fields.email}
            onChange={e => this.handleChange(e)}
            helperText={errors.email && "Email must be a valid format"}
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
            value={fields.confirmEmail}
            onChange={e => this.handleChange(e)}
            helperText={
              errors.confirmEmail && "Confirm email does not match email field"
            }
          />

          <div className={classes.buttonWrapper}>
            {isSubmitting && <Loader size={28} />}
            <Button
              type="submit"
              className={classes.button}
              variant="raised"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(InviteForm);
