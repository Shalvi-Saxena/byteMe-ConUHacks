
import {
  actions
} from '../../constants';
import { getCurrentUserAction, updateUserAction } from './onGetUser';

const {
  REQUEST_CURRENT_USER,
  REQUEST_USER_UPDATE,
} = actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default (action, args) => (dispatch) => {
  switch (action) {
    case REQUEST_CURRENT_USER:
      return getCurrentUserAction(action, { dispatch });
    case REQUEST_USER_UPDATE:
      return updateUserAction(action, { dispatch, args });
    default:
      return;
  }
};
