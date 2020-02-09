import React from 'react';
import './App.css';

/** Routing */
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import UnprotectedRoute from '../routes/UnprotectedRoute';

/** Pages */
import Login from './Login';
import StarWarsList from './StarWarsList';

export default class App extends React.Component {
  render() {
    return <div className="App">
      <header className="App-header">

      </header>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={StarWarsList}/>
          <UnprotectedRoute path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  }
}
