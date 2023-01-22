
import { userApi } from '../../apis/';
import {
  actions
} from '../../constants';

const { getCurrentUser, updateUser } = userApi;
const {
  REQUEST_USERS_FAILURE,
  REQUEST_SIGN_IN_SUCCESS,
} = actions;

export function getCurrentUserAction(action, { dispatch }) {
  return getCurrentUser()
    .then(data => {
      const { responseObject = {} } = data;
      const { userData } = responseObject;
      dispatch({
        type: action,
        payload: {
          type: action,
          data: userData,
        },
      });
      dispatch({
        type: REQUEST_SIGN_IN_SUCCESS,
        payload: {
          type: REQUEST_SIGN_IN_SUCCESS,
          data: responseObject,
        },
      });
    })
    .catch(error => {
      console.log('[actions onGetUser.js] Error getting user data', error);
      return dispatch({
        type: REQUEST_USERS_FAILURE,
        payload: {
          error
        }
      });
    })
};

export function updateUserAction(action, { dispatch, args }) {
  return updateUser(args)
    .then(data => {
      const { responseObject } = data;
      return dispatch({
        type: action,
        payload: {
          type: action,
          data: responseObject,
        },
      });
    })
    .catch(error => {
      console.log('[actions onGetUser.js] Error updating user', error);
      return;
    })
};