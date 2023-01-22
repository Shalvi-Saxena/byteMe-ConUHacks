import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from "react-redux";
import { Container, Grid, Button, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import { loginActions } from '../actions';
import { actions } from '../constants';
import { withRouter } from './withRouter';

const styles = (theme) => ({
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  login() {
    const { email, password } = this.state;
    const params = {
      email,
      password,
    };
    this.props.loginActions(actions.REQUEST_SIGN_IN, params)
    .then(() => {
      const { isLoggedIn } = this.props.loggedUser;
      if (isLoggedIn) {
        console.log(this.props)
        this.props.navigate('/');
      }
    });
  }

  render() {
    const { classes, loggedUser } = this.props;
    const {
      isLoading = false,
    } = loggedUser;
    return (
      <Container className={classes.container} maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => this.setState({ email: e.target.value })}
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button disabled={isLoading} onClick={this.login.bind(this)} color="secondary" fullWidth type="submit" variant="contained">
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ loggedUser }) => {
  return {
    loggedUser,
  };
}

export default compose(withRouter, compose(
  connect(mapStateToProps, { loginActions }),
  withStyles(styles, { withTheme: true })
))(Login);
