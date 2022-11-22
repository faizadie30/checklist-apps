/* import service api for thunk method */
import GetThunk from './GetThunks';
import PostThunk from './PostThunks';

/* service get */
const ApiListChecklist = (config) => GetThunk('checklist', config);

/* service post */
const ApiLogin = (data) => PostThunk('login', data);

/* declare routing */
const Service = { ApiLogin, ApiListChecklist };

export default Service;
