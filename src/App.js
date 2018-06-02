import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Header, Footer, Text, InviteModal, InviteForm } from "./Components";
import { sendForm } from "./Utils/api";
import { validateFields } from "./Utils/form";

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
    errors: {
      name: false,
      email: false,
      confirmEmail: false
    }
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = fields => {
    const errors = validateFields(fields);
    const { name, email, confirmEmail } = errors;
    this.setState({ errors });

    if (name || email || confirmEmail) {
      return;
    }
    sendForm(name, email)
      .then(() => {
        this.inviteform.reset();
        this.handleClose();
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  render() {
    const { classes } = this.props;
    const { open, errors } = this.state;
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
            errors={errors}
          />
        </InviteModal>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
