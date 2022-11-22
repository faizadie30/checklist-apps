import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

const GetThunk = async (path, config = {}) => {
  config.url = `${REACT_APP_ENDPOINT}/${path}`;
  config.method = 'GET';
  config.withCredentials = false;
  return console.log('config:', config);
  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default GetThunk;
