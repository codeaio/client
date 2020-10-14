import axios from "axios";
import { API } from "../config";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const PROJECT_LOADING = "PROJECT_LOADING";
export const GET_PROJECTS = "GET_PROJECTS";
export const PROJECTS_LOADING = "PROJECTS_LOADING";

// Create Project
export const createProject = projectData => dispatch => {
  console.log(projectData);
  var token = localStorage.getItem("jwtToken");
  console.log('createProject');
  axios
    .post(API + "/projects/create", {...projectData, token: token })
    .then(res =>
      dispatch({
        type: CREATE_PROJECT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Update Project
export const updateProject = projectData => dispatch => {
  var token = localStorage.getItem("jwtToken");
  console.log('updateProject');
  axios
    .patch(`${API}/projects/update`, {...projectData, token: token })
    .then(res =>
      dispatch({
        type: UPDATE_PROJECT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Delete Project
export const deleteProject = (id, history) => dispatch => {
  var token = localStorage.getItem("jwtToken");
  console.log('deleteProject');
  axios
    .delete(`${API}/projects/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      })
    )
    .then(res => history.push("/dashboard"))
    .catch(err => console.log(err));
};

// Get specific project by id
export const getProject = id => dispatch => {
  var token = localStorage.getItem("jwtToken");
  console.log('getProject');
  dispatch(setProjectLoading());
  axios
    .get(`${API}/projects/${id}`, {token: token})
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECT,
        payload: null
      })
    );
};

// Get all projects for specific user
export const getProjects = () => dispatch => {
  var token = localStorage.getItem("jwtToken");
  console.log('getProjects');
  console.log(token);
  dispatch(setProjectsLoading());
  axios
    .get(`${API}/projects/`, {params: {token: token}})
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECTS,
        payload: null
      })
    );
};

// Project loading
export const setProjectLoading = () => {
  return {
    type: PROJECT_LOADING
  };
};

// Projects loading
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
