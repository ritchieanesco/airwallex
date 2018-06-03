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
    padding: "12px"
  },
  button: {
    marginTop: "24px"
  }
});

class App extends Component {
  state = {
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

  handleSend = () => {
    this.setState({ isSubmitting: !this.state.isSubmitting });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInput = (name, value) => {
    const fields = { ...this.state.fields };
    fields[name] = value;
    this.setState({ fields });
  };

  handleErrors = fields => {
    const errors = { ...this.state.errors };
    const { name, email, confirmEmail } = fields;
    errors.name = nameValidation(name);
    errors.email = !emailValidation(email);
    errors.confirmEmail =
      !emailValidation(confirmEmail) && !isSame(email, confirmEmail);
    return errors;
  };

  handleSubmit = fields => {
    const errors = this.handleErrors(fields);
    this.setState({ errors }, () => {
      const { name, email, confirmEmail } = this.state.errors;
      if (!name && !email && !confirmEmail) {
        this.handleSend();
        this.send();
      }
    });
  };

  send() {
    const { name, email } = this.state.fields;
    sendForm(name, email)
      .then(response => {
        this.handleSend();

        // this.setState(
        //   {
        //     fields: {
        //       name: "",
        //       email: "",
        //       confirmEmail: ""
        //     }
        //   },
        //   () => {
        //     this.handleClose();
        //   }
        // );
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    const { classes } = this.props;
    const { open, errors, fields, isSubmitting } = this.state;
    console.log(this.state);

    return (
      <Fragment>
        <Header />
        <div className={classes.content}>
          <Grid container alignItems="center" justify="center" spacing={24}>
            <Grid item xs={8}>
              <Text variant="display3">A better way to enjoy every day</Text>
              <Text variant="title">Be the first to know when we launch</Text>
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
            formRef={item => this.inviteform}
            submitForm={this.handleSubmit}
            inputChange={this.handleInput}
            errors={errors}
            fields={fields}
            isSubmitting={isSubmitting}
          />
        </InviteModal>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
