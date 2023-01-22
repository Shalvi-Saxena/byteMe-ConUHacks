
import {
  actions
} from '../../constants';
import { loginAction, logoutAction } from './onLogin';

const {
  REQUEST_SIGN_IN,
  REQUEST_LOGOUT,
} = actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default (action, args) => (dispatch) => {
  switch (action) {
    case REQUEST_SIGN_IN:
      return loginAction(action, { dispatch, args });
    case REQUEST_LOGOUT:
      return logoutAction(action, { dispatch, args });
    default:
      return;
  }
};
