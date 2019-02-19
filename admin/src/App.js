import React, {Component} from 'react';
import {LayoutRoute, EmptyLayout} from './components/Layout';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import './styles/AdminLTE.scss';
import AuthPage from "./pages/AuthPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={AuthPage} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
