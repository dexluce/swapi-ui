import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { TextField, Button } from '@material-ui/core';

export default class Login extends React.Component {
  user = "";
  password = "";

  render() {
    return (
      <AuthContext.Consumer>
        {({ signIn }) =>
          <div>
            <TextField
              id="userInput"
              onChange={e => this.user=e.target.value}
            />
            <TextField
              id="passwordInput"
              onChange={e => this.password=e.target.value}
            />
            <Button onClick={() => {
              console.log(signIn)
              signIn(this.user, this.password);
            }}>
              login
            </Button>
          </div>
        }
      </AuthContext.Consumer>
    );
  }
}
  