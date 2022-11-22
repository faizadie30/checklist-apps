import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

const Put = (path, data, config = {}) => {
  config.url = `${REACT_APP_ENDPOINT}/${path}`;
  config.method = 'PUT';
  config.data = data;
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

export default Put;
