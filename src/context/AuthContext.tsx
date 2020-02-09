import React from 'react';

interface AuthContext {
  isAuthenticated: boolean,
  signIn: (user: string, password: string) => void,
};

const initialState: AuthContext = {
  isAuthenticated: localStorage.getItem("authToken") ? true : false,
  signIn: (user: string, password: string) => {
    localStorage.setItem("authToken", "true");
    initialState.isAuthenticated = true;
  }
}

export const AuthContext = React.createContext(initialState);