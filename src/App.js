import React from 'react';
import Docs from './components/docs/docs';
import Wrapper  from "./components/home/wrapper";
import Login from './components/user/login';
import Signup from './components/user/signup';
import IDE from './components/IDE';
import Card from './components/user/card';
import Layout from './components/dashboard/layout';

import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    var jwt = localStorage.getItem('token');
    if (jwt) {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Wrapper} exact/>
          <Route path="/docs" component={Docs} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/IDE" component={IDE} />
          <Route path="/dashboard" component={Layout} />
          <Route path="/card">
            <Card type="signup" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
