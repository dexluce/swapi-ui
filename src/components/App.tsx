import React from 'react';
import Login from './Login';
import './App.css';
import PrivateRoute from '../routes/PrivateRoute';
import StarWarsList from './StarWarsList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return <div className="App">
      <header className="App-header">

      </header>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={StarWarsList}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  }
}
