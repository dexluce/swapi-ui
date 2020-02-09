import React from 'react';
import { TextField, Button } from '@material-ui/core';

interface LoginProps {
  signIn: (user: string, password: string) => void
}

export default class Login extends React.Component<LoginProps> {
  user = "";
  password = "";

  render() {
    return(
      <div>
        <TextField
          id="userInput"
          onChange={e => this.user=e.target.value}
          />
        <TextField
          id="passwordInput"
          onChange={e => this.password=e.target.value}
          />
        <Button onClick={() => this.props.signIn(this.user, this.password)}>
          login
        </Button>
      </div>
    );
  }
}
  