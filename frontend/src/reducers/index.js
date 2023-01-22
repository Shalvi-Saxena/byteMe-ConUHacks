import { combineReducers } from 'redux';

import user from './user';
import loggedUser from './login';
import s3 from './s3';
import analyser from './analyser';
import transaction from './transaction';
// import recommendation from './recommendation';

const reducer = combineReducers({
  loggedUser,
  user,
  s3,
  analyser,
  transaction,
  // recommendation,
})

export default reducer;