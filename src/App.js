import React from 'react';
import Docs from './components/docs/docs';
import Wrapper  from "./components/home/wrapper";
import Login from './components/user/login';
import Signup from './components/user/signup';
import IDE from './components/IDE';
import Card from './components/user/card';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Modal from './components/dashboard/MainContent/Modal/Modal';
import Project from './components/dashboard/MainContent/Project/Project';
import Dashboard from './components/dashboard/MainContent/Dashboard';
import SideNav from './components/dashboard/SideNav/SideNav';
import TopNav from './components/dashboard/TopNav/TopNav';
import Layout from './components/dashboard/Layout';
import AboutUs from './components/aboutus/AboutUs';

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
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/IDE" component={IDE} />
          <Route path="/modal" component={Modal} />
          <Route path="/project" component={Project} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sidenav" component={SideNav} />
          <Route path="/topnav" component={TopNav} />
          <Route path="/layout" component={Layout} />
          <Route path="/card">
            <Card type="signup" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
