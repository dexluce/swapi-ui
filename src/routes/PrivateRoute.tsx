import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default class PrivateRoute extends Route {
  render() {
    return (
      <AuthContext.Consumer>
        {({ isAuthenticated}) => {
          if (isAuthenticated) {
            if (this.props.component) {
              return React.createElement(this.props.component);
            } else if (this.props.children) {
              return this.props.children;
            }
          } else {
            return <Redirect to='/login'/>;
          }
        }}
      </AuthContext.Consumer>
    );
  }
}