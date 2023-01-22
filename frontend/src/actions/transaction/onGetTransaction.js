
import { transactionApi } from '../../apis';
import { setToken } from '../../utils/lib';
import {
  actions
} from '../../constants';

const { getTransactions } = transactionApi;
const {
  REQUEST_TRANSACTIONS_SUCCESS,
  REQUEST_TRANSACTIONS_FAILURE,
} = actions;

export function getTransaction(action, { dispatch, args }) {
  dispatch({
    type: action
  });
  return getTransactions(args)
    .then(data => {
      const { responseObject } = data || {};
      return dispatch({
        type: REQUEST_TRANSACTIONS_SUCCESS,
        payload: {
          type: REQUEST_TRANSACTIONS_SUCCESS,
          data: responseObject,
        },
      });
    })
    .catch(error => {
      console.log('[actions onLogin.js] Error getting transactions', error);
      return dispatch({
        type: REQUEST_TRANSACTIONS_FAILURE,
        payload: {
          error
        },
      });
    })
};