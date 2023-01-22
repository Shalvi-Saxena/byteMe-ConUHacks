
import {
  actions
} from '../../constants';
import { getTransaction } from './onGetTransaction';

const {
  REQUEST_TRANSACTIONS,
} = actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default (action, args) => (dispatch) => {
  switch (action) {
    case REQUEST_TRANSACTIONS:
      return getTransaction(action, { dispatch });
    default:
      return;
  }
};
