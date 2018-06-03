import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { object, bool, func } from "prop-types";
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

  handleClose = event => {
    event.preventDefault();
    this.props.closeModal();
  };

  renderForm() {
    const { classes, errors, fields, isSubmitting, fail } = this.props;
    return (
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
          error={errors && errors.name ? errors.name : false}
          value={fields && fields.name ? fields.name : ""}
          onChange={e => this.handleChange(e)}
          helperText={
            errors && errors.name && "Name must be at least 3 characters long"
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
          error={errors && errors.email ? errors.email : false}
          value={fields && fields.email ? fields.email : ""}
          onChange={e => this.handleChange(e)}
          helperText={errors && errors.email && "Email must be a valid format"}
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
          error={errors && errors.confirmEmail ? errors.confirmEmail : false}
          value={fields && fields.confirmEmail ? fields.confirmEmail : ""}
          onChange={e => this.handleChange(e)}
          helperText={
            errors &&
            errors.confirmEmail &&
            "Confirm email does not match email field"
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
        {!isSubmitting &&
          fail && (
            <Text variant="body2">
              Sorry, there was an error sending your invitation. Please try
              again.
            </Text>
          )}
      </form>
    );
  }

  renderSuccess() {
    return (
      <div>
        <Text variant="subheading">Success</Text>
        <Text variant="body1">We will be in contact with you shortly</Text>
        <Button
          onClick={e => this.handleClose(e)}
          type="submit"
          color="primary"
        >
          Close
        </Button>
      </div>
    );
  }

  render() {
    const { success } = this.props;
    return (
      <Fragment>
        <Text variant="title" id="invite-modal-title">
          Request an Invite
        </Text>
        {success ? this.renderSuccess() : this.renderForm()}
      </Fragment>
    );
  }
}

InviteForm.propTypes = {
  classes: object,
  errors: object,
  fields: object,
  isSubmitting: bool,
  fail: bool,
  submitForm: func,
  inputChange: func,
  closeModal: func
};

export default withStyles(styles)(InviteForm);
