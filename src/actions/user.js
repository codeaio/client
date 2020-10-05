export const REGISTER_USER = 'REGISTER_USER'
export const GET_USER = 'GET_USER'
export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const ADD_USER = 'ADD_USER'

export function registerUser(user) {
    return { type: REGISTER_USER, user };
}

export function logoutUser() {
    return { type: LOGOUT_USER };
}

export function authUser(login) {
    return { type: AUTH_USER, login };
}

export function addUser(user) {
    return { type: ADD_USER, user };
}