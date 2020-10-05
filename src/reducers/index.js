import { combineReducers } from 'redux'

import {
    REGISTER_USER,
    LOGOUT_USER,
    AUTH_USER,
    ADD_USER
} from '../actions/user';
import { register, login } from '../helpers/utils';

function user(state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            register(action.user);
            console.log('registered');
            return state;            
        case LOGOUT_USER:
            console.log('logout');
            localStorage.removeItem('jwtToken');
            return {};
        case AUTH_USER:
            login(action.login)
                .then((data) => {
                    localStorage.setItem('jwtToken', data.token);
                    state.user = data.user;
                    return state;
                });
            return state;
        case ADD_USER:
            return {...state, user: action.user};
        default:
            return state
    }
}

const userApp = combineReducers({
    user
});

export default userApp;