import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject } from "../../../../actions/projectsActions";

import Spinner from "../../../common/Spinner";
import Modal from "../Modal/Modal";

import "../MainContent.scss";
import "./Project.scss";

class Project extends Component {
  state = {
    modal: false,
    edit: false,
    name: "",
    id: "",
    owner: {},
  };

  toggleModal = e => {
    this.setState({
      modal: !this.state.modal,
      edit: false
    });
  };

  toggleEditModal = (name, members, id, owner, e) => {
    this.setState({
      modal: !this.state.modal,
      edit: !this.state.edit,
      name: name,
      id: id,
      owner: owner
    });
  };

  componentDidMount() {
    this.props.getProject(this.props.match.params.project);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.project !== prevProps.match.params.project) {
      this.props.getProject(this.props.match.params.project);
    }
  }

  render() {
    if (
      !(this.props.project &&
      !this.props.projects.projectLoading)
    ) {
      const { project } = this.props;

      return (
        <div className="main-content">
          <h1 className="project-header">{project.name}</h1>
          <button
            onClick={this.toggleEditModal.bind(
              this,
              project.name,
              project._id,
              project.owner
            )}
            className="main-btn center-btn"
          >
            Edit Project Info
          </button>

          <div className="modal-wrapper">
            <Modal
              onClose={this.toggleModal}
              modal={this.state.modal}
              edit={this.state.edit}
              name={this.state.name}
              id={this.state.id}
              owner={this.state.owner}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="project-spinner">
        <Spinner />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  project: state.projects.project,
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProject }
)(Project);
