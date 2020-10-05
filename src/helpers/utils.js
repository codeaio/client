import { API } from '../config';

export default async function postData(url='', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrePolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
};

export async function register(user = {}) {
  return postData(API + "/users/signup", user);
}

export async function login(user = {}) {
  console.log('login');
  return postData(API + '/users/signin', user);
}