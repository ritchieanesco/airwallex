import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Header, Footer, Text, InviteModal, InviteForm } from "./Components";
import { sendForm } from "./Utils/api";
import { nameValidation, emailValidation, isSame } from "./Utils/form";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  content: {
    textAlign: "center",
    padding: "24px 0",
    background: "linear-gradient(to bottom, #689f38 0%,#33691e 100%);"
  },
  hero: {
    maxWidth: "960px",
    margin: "0 auto"
  },
  button: {
    marginTop: "24px"
  }
});

class App extends Component {
  initialState = {
    open: false,
    success: false,
    fail: false,
    isSubmitting: false,
    fields: {
      name: "",
      email: "",
      confirmEmail: ""
    },
    errors: {
      name: false,
      email: false,
      confirmEmail: false
    }
  };

  state = this.initialState;

  handleSend = () => {
    this.setState({ isSubmitting: !this.state.isSubmitting });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState(this.initialState);
  };

  handleSuccess = () => {
    this.setState({ isSubmitting: false, success: true });
  };

  handleFail = () => {
    this.setState({ isSubmitting: false, fail: true });
  };

  handleInput = (name, value) => {
    const fields = { ...this.state.fields };
    fields[name] = value;
    this.setState({ fields });
  };

  handleSubmit = fields => {
    const errors = this.validateFields(fields);
    this.setState({ errors }, () => {
      const { name, email, confirmEmail } = this.state.errors;
      if (name || email || confirmEmail) {
        return;
      }
      this.send();
    });
  };

  send() {
    this.handleSend();
    const { name, email } = this.state.fields;
    sendForm(name, email)
      .then(response => {
        this.handleSuccess();
      })
      .catch(error => {
        this.handleFail();
      });
  }

  validateFields = fields => {
    const errors = { ...this.state.errors };
    const { name, email, confirmEmail } = fields;
    errors.name = nameValidation(name);
    errors.email = !emailValidation(email);
    errors.confirmEmail =
      !emailValidation(confirmEmail) && !isSame(email, confirmEmail);
    return errors;
  };

  render() {
    const { classes } = this.props;
    const { open, errors, fields, isSubmitting, success, fail } = this.state;
    return (
      <Fragment>
        <Header />
        <div className={classes.content}>
          <Grid
            container
            className={classes.hero}
            alignItems="center"
            justify="center"
            spacing={24}
          >
            <Grid item xs={8}>
              <Text variant="display3">A better way to enjoy every day</Text>
              <Text variant="display1">
                Be the first to know when we launch
              </Text>
              <Button
                onClick={this.handleOpen}
                variant="raised"
                size="large"
                color="primary"
                className={classes.button}
              >
                Request an Invite
              </Button>
            </Grid>
          </Grid>
        </div>
        <Footer />
        <InviteModal open={open} onClose={this.handleClose}>
          <InviteForm
            submitForm={this.handleSubmit}
            inputChange={this.handleInput}
            closeModal={this.handleClose}
            errors={errors}
            fields={fields}
            isSubmitting={isSubmitting}
            success={success}
            fail={fail}
          />
        </InviteModal>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
