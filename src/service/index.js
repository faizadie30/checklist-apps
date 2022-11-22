/* import not thunk method */
import Get from './Get';
import Post from './Post';

/* import service api for thunk method */
import GetThunk from './GetThunks';
import PostThunk from './PostThunks';

/* service get */
// const validateSession = (config) => Get('api/validate', false, 'v1', config);

/* service post */
// const authUserToSocket = (data) => Post('login', true, data, 'socket');

/* declare routing */
const Service = {};

export default Service;
