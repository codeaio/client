import React from 'react';
import Header from './components/home/header';
import Main from './components/home/main';
import Footer from './components/home/footer';
import Docs from './components/docs/docs';
import Wrapper  from "./components/home/wrapper";
import Login from './components/user/login';
import Signup from './components/user/signup';
import IDE from './components/IDE';
import Card from './components/user/card';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Wrapper} exact/>
        <Route path="/docs" component={Docs} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/IDE" component={IDE} />
        <Route path="/card">
          <Card type="signup" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
