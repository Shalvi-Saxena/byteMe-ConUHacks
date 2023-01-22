import {
  actions
} from '../constants';

const {
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILURE,
  REQUEST_CURRENT_USER,
} = actions;

const initialState = {
  data: null,
  error: null,
  isLoading: true,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  const { data } = action.payload || {};
  switch (action.type) {
    case REQUEST_CURRENT_USER:
      return {
        ...state,
        currentUser: data,
        isLoading: false,
      }
    case REQUEST_USERS_SUCCESS:
      return {
        ...state,
        data,
        isLoading: false,
      }
    case REQUEST_USERS_FAILURE:
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
