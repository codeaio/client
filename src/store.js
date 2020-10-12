import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import postData from "./helpers/utils";
import { API } from "./config";
import { addUser } from "./actions/user";

var token = localStorage.getItem("jwtToken");
const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

// export const store = createStore(rootReducer);
// if (token) {
//   postData(API + "/users/", { token: token }).then((data) => {
//     store.dispatch(addUser(data.user));
//   });
// }
