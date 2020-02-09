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
        {({ isAuthenticated }) => {
          if (isAuthenticated) {
            if (this.props.component) {
              return React.createElement(this.props.component);
            } else if (this.props.children) {
              return this.props.children;
            } else {
              throw new Error("No component was passed to PrivateRoute. You can use React children or component props to pass a component to this private route");
            }
          } else {
            return <Redirect to='/login'/>;
          }
        }}
      </AuthContext.Consumer>
    );
  }
}