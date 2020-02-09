import React from 'react';

interface AuthContext {
  isAuthenticated: boolean,
  signIn: (user: string, password: string) => void,
};

const initialState: AuthContext = {
  /** Public Variables */
  isAuthenticated: localStorage.getItem("authToken") ? true : false,

  /** Public Function */
  signIn: (user: string, password: string) => {
    /** Here is the place to call a auth api. */
    localStorage.setItem("authToken", "true");
    initialState.isAuthenticated = true;
    window.location.reload();
  }
}

export const AuthContext = React.createContext(initialState);