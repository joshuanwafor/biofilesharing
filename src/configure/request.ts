import axios from 'axios';
import {AppCredential} from './credentials';
// import {API_URI} from './config';

const request = axios.create({
  baseURL: 'https://tollator-core.herokuapp.com/rest',
});

request.defaults.baseURL = 'https://tollator-core.herokuapp.com/rest';
request.defaults.headers.common['Content-Type'] = 'application/json';

export let GLOBAL_FETCH_HEADER = {
  'Content-Type': 'application/json',
  authorization: '',
};

export default request;

export const setHeaderToken = (token: string) => {
  new AppCredential().setAuth({
    token: token,
    id: '',
  });
  console.log(token, "configured token");
  if (token) {
    request.defaults.headers.common.authorization = `${token}`;
    GLOBAL_FETCH_HEADER.authorization = `${token}`;
  }
};
