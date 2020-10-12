import { combineReducers } from "redux";
import {
  REGISTER_USER,
  LOGOUT_USER,
  AUTH_USER,
  ADD_USER,
  GET_ERROR,
  addUser,
} from "../actions/user";
import { register, login } from "../helpers/utils";
import { store } from "../store";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";

var initalState = {
  hasError: false,
};

function user(state = initalState, action) {
  switch (action.type) {
    case REGISTER_USER:
      register(action.user).then((data) => {
        if (!data.ok) {
          store.dispatch({ type: GET_ERROR, errors: data.errors });
        }
      });
      return state;
    case LOGOUT_USER:
      localStorage.removeItem("jwtToken");
      return {};
    case AUTH_USER:
      login(action.login).then((data) => {
        if (data.ok) {
          localStorage.setItem("jwtToken", data.token);
          store.dispatch(addUser(data.user));
          return state;
        } else {
          store.dispatch({ type: GET_ERROR, errors: data.errors });
        }
      });
      return state;
    case GET_ERROR:
      return { ...state, errors: action.errors, hasError: true };
    case ADD_USER:
      return { ...state, user: action.user, hasError: false };
    default:
      return state;
  }
}

const userApp = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  user,
});

export default userApp;
