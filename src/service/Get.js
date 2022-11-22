import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

const Get = async (path, config = {}) => {
  config.url = `${REACT_APP_ENDPOINT}/${path}`;
  config.method = 'GET';
  config.withCredentials = false;

  const promise = new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return promise;
};

export default Get;
