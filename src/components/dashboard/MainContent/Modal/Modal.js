import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  createProject,
  updateProject,
  deleteProject
} from "../../../../actions/projectsActions";

import "./Modal.scss";

class Modal extends Component {
  state = {
    projectName: "",
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        projectName: nextProps.name,
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  createProject = () => {
    let project = {
      projectName: this.state.projectName,
    };
    console.log(project);
    this.props.createProject(project);
    this.onClose();
  };

  updateProject = async id => {
    let project = {
      id: this.props.id,
      projectName: this.state.projectName,
    };

    await this.props.updateProject(project);

    this.onClose();
    window.location.reload();
  };

  deleteProject = id => {
    this.props.deleteProject(id, this.props.history);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      projectName: "",
    });
  };

  onSelectChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    if (!this.props.modal) {
      return null;
    }

    document.onkeyup = e => {
      if (e.keyCode === 27 && this.props.modal) {
        this.onClose();
      }
    };
    console.log(this.state);
    // Edit project modal
    if (this.props.edit) {
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 className="header">Edit Project Info</h1>
          <p className="created-by">
            Created by {this.props.owner.name} ({this.props.owner.email})
          </p>
          <div className="form-group">
            <label>
              <div className="form-label">Project Name (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.projectName}
                id="projectName"
                type="text"
                placeholder={"My Awesome Project"}
                className="form-input"
              />
            </label>
          </div>
          <div>
            <button
              className="main-btn update-project"
              onClick={this.updateProject.bind(this, this.props.id)}
            >
              Update Project
            </button>
            {this.props.owner.id === this.props.auth.user.id ? (
              <button
                className="main-btn delete-project"
                onClick={this.deleteProject.bind(this, this.props.id)}
              >
                Delete Project
              </button>
            ) : null}
          </div>
        </div>
      );
    }
    // Create project modal
    else
      return (
        <div className="modal">
          <span className="close-modal" onClick={this.onClose}>
            &times;
          </span>
          <h1 style={{margin: "20px 0", color: "black", fontWeight: "500", fontSize: "22px"}}>Create a project</h1>
          <div className="form-group">
            <label>
              <div className="form-label">Project Name (required)</div>
              <input
                onChange={this.onChange}
                value={this.state.projectName}
                id="projectName"
                type="text"
                placeholder="My Awesome Project"
                className="form-input"
              />
            </label>
          </div>
          <div>
            <button
              className="main-btn create-project"
              onClick={this.createProject}
            >
              Create Project
            </button>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects,
  tasks: state.tasks
});

export default connect(
  mapStateToProps,
  {
    createProject,
    updateProject,
    deleteProject
  }
)(withRouter(Modal));
