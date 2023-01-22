
import { loginApi } from '../../apis/';
import { setToken } from '../../utils/lib';
import {
  actions
} from '../../constants';

const { login } = loginApi;
const {
  REQUEST_SIGN_IN_FAILURE,
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_LOGOUT,
} = actions;

export function loginAction(action, { dispatch, args }) {
  dispatch({
    type: action
  });
  return login(args)
    .then(data => {
      const { responseObject } = data || {};
      setToken(responseObject.token)
      return dispatch({
        type: REQUEST_SIGN_IN_SUCCESS,
        payload: {
          type: REQUEST_SIGN_IN_SUCCESS,
          data: {
            userId: responseObject.userId,
            userName: responseObject.userName,
          },
        },
      });
    })
    .catch(error => {
      console.log('[actions onLogin.js] Error logging in user', error);
      return dispatch({
        type: REQUEST_SIGN_IN_FAILURE,
        payload: {
          error
        },
      });
    })
};

export function logoutAction(action, { dispatch, args}) {
  setToken(null);
  return dispatch({
    type: REQUEST_LOGOUT,
  });
}