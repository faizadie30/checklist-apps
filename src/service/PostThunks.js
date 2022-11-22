import axios from 'axios';

const { REACT_APP_ENDPOINT } = process.env;

const PostThunks = (path, data, config = {}) => {
  config.url = `${REACT_APP_ENDPOINT}/${path}`;
  config.method = 'POST';
  config.data = data;
  config.withCredentials = false;

  const promise = new Promise((resolve, reject) => {
    resolve(axios(config));
  });
  return promise;
};

export default PostThunks;
