import React from 'react';
import { AuthContext } from '../context/AuthContext';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({ signIn }) =>
          <LoginForm signIn={signIn} />
        }
      </AuthContext.Consumer>
    );
  }
}
  