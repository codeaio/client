import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectsActions";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Spinner from "../common/Spinner";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import Dashboard from "./MainContent/Dashboard";
import Project from "./MainContent/Project/Project";

import "./Layout.scss";

class Layout extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, projectsLoading } = this.props.projects;
    
    let dashboardContent;

    if (projects === null || projectsLoading) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = (
        <>
          <SideNav projects={projects} />
          <div className="right">
            <TopNav />
            <Dashboard />
          </div>
        </>
      );
    }

    return (
      <Router>
        <div className="wrapper">{dashboardContent}</div>
      </Router>
    );
  }
}

Layout.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects
});

export default withRouter(
  connect(
    mapStateToProps,
    { getProjects }
  )(Layout)
);
