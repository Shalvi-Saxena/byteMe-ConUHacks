import {
  actions
} from '../constants';

const {
  REQUEST_TRANSACTIONS,
  REQUEST_TRANSACTIONS_FAILURE,
  REQUEST_TRANSACTIONS_SUCCESS,
} = actions;

const initialState = {
  data: null,
  error: null,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  const { data } = action.payload || {};
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        data,
        isLoading: false,
      }
    case REQUEST_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        data,
        isLoading: false,
      }
    case REQUEST_TRANSACTIONS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      }
    default: 
      return state;
  };
};

export default reducer;
